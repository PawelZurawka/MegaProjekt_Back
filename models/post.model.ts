import { PostInterface } from '../types';
import { Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';

const postSchema = new Schema<PostInterface>(
  {
    id: { type: String, required: true, unique: true, default: uuid },
    title: { type: String, required: true, unique: true, minlength: 3, maxlength: 100 },
    content: { type: String, required: true, minlength: 2, maxlength: 2000 },
    photo: { type: String, default: '' },
    username: { type: String, required: true, minlength: 3, maxlength: 50 },
    categories: [String],
  },
  { timestamps: true }
);

export const Post = model<PostInterface>('Post', postSchema);
