import { Router } from 'express';
import { deleteUser, getUser, updateUser } from '../controllers/user.controller';

export const userRouter = Router()
  .get('/:id', getUser)

  .put('/:id', updateUser)

  .delete('/:id', deleteUser);
