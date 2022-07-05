import { Post } from '../models/post.model';
import { Request, Response } from 'express';

export const getSinglePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findOne({ _id: req.query.id });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const addPost = async (req: Request, res: Response) => {
  try {
    const newPost = new Post(req.body);
    const postSaved = await newPost.save();
    res.status(201).json(postSaved);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};
