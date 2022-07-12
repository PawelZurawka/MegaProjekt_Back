import { Document, Types } from 'mongoose';

export interface PostInterface extends Document {
  id: string;
  title: string;
  content: string;
  photo?: string;
  username: string;
  categories?: Types.Array<string>;
}
