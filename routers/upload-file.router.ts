import { Request, Response, Router } from 'express';
import { upload } from '../utils/file-storage';

export const uploadFileRouter = Router().post('/', upload.single('file'), (req: Request, res: Response) => {
  res.status(200).json('File has been uploaded');
});
