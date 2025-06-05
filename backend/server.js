import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { requireAuth } from '@clerk/express';

const app = express();
const prisma = new PrismaClient();

const FRONTEND = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(cors({
  origin: FRONTEND,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
app.use(express.json());

const postSchema = z.object({
  title: z.string().min(1),
  content: z.string(),
});

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.post('/api/posts', requireAuth(), async (req, res) => {
  const parsed = postSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error });
  }

  try {
    const post = await prisma.post.create({
      data: {
        ...parsed.data,
        authorId: req.auth.userId,
      },
    });
    res.status(201).json(post);
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

app.get('/api/posts/:postId/comments', async (req, res) => {
  const { postId } = req.params;

  if (!postId) {
    return res.status(400).json({ error: 'Missing postId' });
  }

  try {
    const comments = await prisma.comment.findMany({
      where: { postId: postId }, // no parseInt, use string directly
      orderBy: { createdAt: 'asc' },
    });
    res.json(comments);
  } catch (err) {
    console.error('Error fetching comments:', err);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

app.post('/api/posts/:postId/comments', requireAuth(), async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;

  if (!content || !postId) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  try {
    const comment = await prisma.comment.create({
      data: {
        postId: postId, // no parseInt, use string directly
        content,
        authorId: req.auth.userId,
      },
    });
    res.status(201).json(comment);
  } catch (err) {
    console.error('Error creating comment:', err);
    res.status(500).json({ error: 'Failed to create comment' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
