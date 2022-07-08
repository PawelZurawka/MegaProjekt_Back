import { Router } from 'express';
import { addCategory, getCategory } from '../controllers/category.controller';

export const categoryRouter = Router()
  .get('/', getCategory)

  .post('/', addCategory);
