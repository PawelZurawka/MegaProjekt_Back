import { Post } from '../models/post.model';
import { Request, Response } from 'express';

export const getSinglePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    return res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addPost = async (req: Request, res: Response) => {
  try {
    const newPost = new Post(req.body);
    const postSaved = await newPost.save();
    res.status(201).json(postSaved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getPostsByRange = async (req: Request, res: Response) => {
  const { startAt, limit } = req.params;
  try {
    const posts = await Post.find({}).skip(parseInt(startAt)).limit(parseInt(limit));
    const amount = await Post.countDocuments();
    res.status(200).json({ posts, amount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const post = await Post.findOneAndDelete({ _id: id });
    res.send(`Document with ID: ${post} has been deleted.`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editPost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findOneAndUpdate({ id: req.query.id }, req.body, { new: true });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
