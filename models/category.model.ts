import { CategoryInterface } from '../types';
import { Schema, model } from 'mongoose';

const categorySchema = new Schema<CategoryInterface>(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
  },
  { timestamps: true }
);

export const Category = model<CategoryInterface>('Category', categorySchema);
