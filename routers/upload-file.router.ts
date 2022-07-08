import { Router } from 'express';
import { uploadFile } from '../controllers/upload-file.controller';

export const uploadFileRouter = Router().post('/', uploadFile);
