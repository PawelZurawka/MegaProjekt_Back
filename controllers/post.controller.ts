import { Post } from '../models/post.model';
import { Request, Response } from 'express';

export const getSinglePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await Post.findById({ _id: id });
    return res.json(post);
  } catch (err) {
    res.status(404).json(`Post with id ${id} not found. Error message: ${err.message}`);
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(404).json(`Can not get all posts. Error message: ${err.message}`);
  }
};

export const addPost = async (req: Request, res: Response) => {
  try {
    const newPost = new Post(req.body);
    const postSaved = await newPost.save();
    res.status(201).json(postSaved);
  } catch (err) {
    res.status(400).json(`Can not add post. Error message: ${err.message}`);
  }
};

export const getPostsByRange = async (req: Request, res: Response) => {
  const { startAt, limit } = req.params;
  try {
    const posts = await Post.find({}).skip(parseInt(startAt)).limit(parseInt(limit));
    const amount = await Post.countDocuments();
    res.status(200).json({ posts, amount });
  } catch (err) {
    res.status(500).json(`Can not get posts by range. Error message: ${err.message}`);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await Post.findOneAndDelete({ _id: id });
    res.status(200).send(`Document with ID: ${post._id} has been deleted.`);
  } catch (err) {
    res.status(500).json(`Can not delete post with ID: ${id} Error message: ${err.message}`);
  }
};

export const editPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await Post.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json(`Can not edit post with ID: ${id} Error message: ${err.message}`);
  }
};
