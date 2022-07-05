import { Router } from 'express';
import { addPost, getAllPosts, getSinglePost } from '../controllers/post.controller';

export const postRouter = Router()
  .get('/post', getSinglePost)

  .get('/posts', getAllPosts)

  .post('/post', addPost);
