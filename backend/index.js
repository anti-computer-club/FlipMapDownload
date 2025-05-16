require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { z } = require('zod');
const { requireAuth, clerkClient } = require('@clerk/express');
const app = express();
const prisma = new PrismaClient();

const prodOrigin     = process.env.FRONTEND_URL; // use for production build
const FRONTEND = process.env.FRONTEND_URL || 'http://localhost:5173';

// middleware
app.use(cors({
  origin: FRONTEND,
  methods: ['GET','POST','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true,        // only if you need cookies/auth headers
}));
app.use(express.json());

// Zod schema for post creation
const postSchema = z.object({
  title: z.string().min(1),
  content: z.string(),
});

const commentSchema = z.object({
  content: z.string().min(1),
});

// Helper to batch‐fetch Clerk usernames
async function enrichWithUsernames(records, idField = 'authorId') {
  const ids = [...new Set(records.map(r => r[idField]))];
  const users = await clerkClient.users.getUserList({ userId: ids });
  const userMap = new Map(users.map(u => [
    u.id,
    u.username || u.firstName || u.emailAddresses?.[0]?.emailAddress || 'Unknown'
  ]));
  return records.map(r => ({
    ...r,
    authorName: userMap.get(r[idField]) || 'Unknown',
  }));
}

// GET all posts with authorName
app.get('/api/posts', async (req, res) => {
  try {
    // 1) Fetch raw posts
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    });

    // TEMPORARY: skip enrichment to check DB
    // const enriched = await enrichWithUsernames(posts);
    // return res.json(enriched);

    // Return raw posts for now:
    return res.json(posts);

  } catch (err) {
    console.error('[/api/posts] error:', err);
    return res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// POST a new post (authenticated)
app.post('/api/posts', requireAuth(), async (req, res) => {
  const parsed = postSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);

  try {
    const post = await prisma.post.create({
      data: {
        ...parsed.data,
        authorId: req.auth.userId,
      },
    });
    res.json(post);
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// GET comments for a post, with authorName
app.get('/api/posts/:id/comments', async (req, res) => {
  const postId = req.params.id;
  try {
    const comments = await prisma.comment.findMany({
      where: { postId },
      orderBy: { createdAt: 'asc' },
    });
    const enriched = await enrichWithUsernames(comments);
    res.json(enriched);
  } catch (err) {
    console.error('Error fetching comments:', err);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

// POST a new comment (authenticated)
app.post('/api/posts/:id/comments', requireAuth(), async (req, res) => {
  // Validate only content
  const parsed = commentSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error);
  }

  const comment = await prisma.comment.create({
    data: {
      content: parsed.data.content,  // from client
      postId:   req.params.id,       // from URL
      authorId: req.auth.userId,     // injected from Clerk
    },
  });

  // (Optionally enrich and return the comment with authorName)
  const [enriched] = await enrichWithUsernames([comment]);
  res.status(201).json(enriched);
});



// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
