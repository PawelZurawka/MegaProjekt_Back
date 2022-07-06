import { Router } from 'express';
import { addPost, deletePost, editPost, getAllPosts, getPostsByRange, getSinglePost } from '../controllers/post.controller';

export const postRouter = Router()
  .get('/posts', getAllPosts)

  .get('/posts/:id', getSinglePost)

  .get('/posts/:startAt/:limit', getPostsByRange)

  .post('/posts', addPost)

  .patch('/posts/:id', editPost)

  .delete('/posts/:id', deletePost);
