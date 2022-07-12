import { CategoryInterface } from '../types';
import { Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';

const categorySchema = new Schema<CategoryInterface>(
  {
    id: { type: String, required: true, unique: true, default: uuid },
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
  },
  { timestamps: true }
);

export const Category = model<CategoryInterface>('Category', categorySchema);
