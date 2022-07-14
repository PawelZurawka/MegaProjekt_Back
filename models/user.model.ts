import { UserInterface } from '../types';
import { Schema, model } from 'mongoose';

const userSchema = new Schema<UserInterface>(
  {
    username: { type: String, required: true, unique: true, minlength: 2, maxlength: 50 },
    email: { type: String, required: true, unique: true, minlength: 5, maxlength: 50 },
    password: { type: String, required: true, minlength: 4, maxlength: 150 },
    profilePicture: { type: String, default: '' },
  },
  { timestamps: true }
);

export const User = model<UserInterface>('User', userSchema);
