import { Post } from '../models/post.model';
import { Request, Response } from 'express';

export const getSinglePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    return res.json(post);
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

export const getPostsByRange = async (req: Request, res: Response) => {
  const { startAt, limit } = req.params;
  try {
    const posts = await Post.find({}).skip(parseInt(startAt)).limit(parseInt(limit));
    const amount = await Post.countDocuments();
    res.status(200).json({ posts, amount });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findOneAndDelete({ _id: req.params.id });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const editPost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findOneAndUpdate({ id: req.query.id }, req.body, { new: true });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};
