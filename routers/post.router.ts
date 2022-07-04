import { Router } from 'express';
import { Post } from '../models/post.model';

export const postRouter = Router().get('/first', async (req, res) => {
  res.json(await Post.find());
});
