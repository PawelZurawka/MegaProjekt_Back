import { Router } from 'express';
import { Post } from '../models/post.model';

export const postRouter = Router()
  .get('/first', async (req, res) => {
    res.json(await Post.find());
  })
  .post('/addPost', async (req, res) => {
    // const newPost = new Post({
    //   title: 'testowy eeeeeeeeeee',
    //   author: 'Paweł',
    //   content: 'testowy content',
    // });

    const { title, author, content } = req.body;
    const newPost = new Post({
      title,
      author,
      content,
    });
    try {
      const postSaved = await newPost.save();
      console.log(`Post saved: ${postSaved}`);
      res.status(201).json(postSaved);
    } catch {
      res.status(500).json({ message: 'Error' });
    }
  });
