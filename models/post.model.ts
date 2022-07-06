import { PostInterface } from '../types';
import { Schema, model } from 'mongoose';

const postSchema = new Schema<PostInterface>(
  {
    title: { type: 'String', required: true, minlength: 3, maxlength: 100 },
    author: { type: 'String', required: true, minlength: 2, maxlength: 50 },
    content: { type: 'String', required: true, minlength: 1, maxlength: 2000 },
  },
  { timestamps: true }
);

export const Post = model<PostInterface>('Post', postSchema);
