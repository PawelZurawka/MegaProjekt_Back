import { Document } from 'mongoose';

export interface PostInterface extends Document {
  title: string;
  author: string;
  content: string;
}
