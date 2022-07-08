import { Router } from 'express';
import { addPost, deletePost, editPost, getAllPosts, getPostsByRange, getSinglePost } from '../controllers/post.controller';

export const postRouter = Router()
  .get('/', getAllPosts)

  .get('/:id', getSinglePost)

  .get('/:startAt/:limit', getPostsByRange)

  .post('/', addPost)

  .put('/:id', editPost)

  .delete('/:id', deletePost);
