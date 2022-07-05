import { PostInterface } from '../types';
import { Schema, model } from 'mongoose';

const postSchema = new Schema<PostInterface>(
  {
    title: { type: 'String', required: true },
    author: { type: 'String', required: true },
    content: { type: 'String', required: true },
  },
  { timestamps: true }
);

export const Post = model<PostInterface>('Post', postSchema);
