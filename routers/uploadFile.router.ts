import { Router } from 'express';
import { uploadFile } from '../controllers/upload.controller';

export const uploadFileRouter = Router().post('/', uploadFile);
