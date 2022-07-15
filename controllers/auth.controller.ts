import { Request, Response } from 'express';
import { hash, compare, genSalt } from 'bcrypt';
import { User } from '../models/user.model';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const salt = await genSalt(10);
    const hashedPass = await hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);

    // await newUser.save();
    // res.status(200).json('User has been created');
  } catch (err) {
    res.status(500).json(err);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const validated = await compare(req.body.password, user.password);

    !user && res.status(400).json('Wrong credentials!');
    !validated && res.status(400).json('Wrong credentials!');

    const { password, ...rest } = user.toObject();
    res.status(200).json(rest);
  } catch (err) {
    res.status(400).json(err);
  }
};
