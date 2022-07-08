import { Post } from '../models/post.model';
import { Request, Response } from 'express';

export const getSinglePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  const username = req.query.user;
  const categoryName = req.query.category;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (categoryName) {
      posts = await Post.find({
        categories: {
          $in: [categoryName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addPost = async (req: Request, res: Response) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPostsByRange = async (req: Request, res: Response) => {
  const { startAt, limit } = req.params;
  try {
    const posts = await Post.find().skip(parseInt(startAt)).limit(parseInt(limit));
    const amount = await Post.countDocuments();
    res.status(200).json({ posts, amount });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json('Post has been deleted.');
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json('You can delete only your post!');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const editPost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json('You can update only your post!');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
