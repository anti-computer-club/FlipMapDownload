require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { z } = require('zod');
const { requireAuth } = require('@clerk/express');

const app = express();
const prisma = new PrismaClient();

app.use(cors({
    origin: 'http://localhost:5174',
    credentials: true,
  }));
app.use(express.json());



const postSchema = z.object({
  title: z.string().min(1),
  content: z.string(),
  authorId: z.string(),
});

app.get('/api/posts', async (req, res) => {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(posts);
});

app.get('/:id/comments', async (req, res) => {
    const postId = req.params.id;
    const comments = await prisma.comment.findMany({
      where: { postId },
      orderBy: { createdAt: 'asc' },
    });
    res.json(comments);
  });


app.post('/:id/comments', requireAuth(), async (req, res) => {
    const { content } = req.body;
    const postId = req.params.id;
    const authorId = req.auth.userId;
  
    if (!content) return res.status(400).json({ error: 'Missing content' });
  
    const comment = await prisma.comment.create({
      data: { content, postId, authorId },
    });
  
    res.status(201).json(comment);
  });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));

// Middleware to check authentication 
app.post('/api/posts', requireAuth, async (req, res) => {
    const parsed = postSchema.safeParse({
      ...req.body,
      authorId: req.auth.userId,
    });
  
    if (!parsed.success) return res.status(400).json(parsed.error);
  
    const post = await prisma.post.create({ data: parsed.data });
    res.json(post);
  });
