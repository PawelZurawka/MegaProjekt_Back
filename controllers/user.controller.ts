import { Request, Response } from 'express';
import { hash, genSalt } from 'bcrypt';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';

// router.put("/:id", async (req, res) => {
// });
export const updateUser = async (req: Request, res: Response) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await genSalt(10);
      req.body.password = await hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('You can update only your account!');
  }
};

// router.delete("/:id", async (req, res) => {
export const deleteUser = async (req: Request, res: Response) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted.');
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json('User not found!');
    }
  } else {
    res.status(401).json('You can delete only your account!');
  }
};

// router.get('/:id', async (req, res) => {
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user.toObject();
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};
