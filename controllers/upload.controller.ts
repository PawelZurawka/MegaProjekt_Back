import { Request, Response } from 'express';
import { upload } from '../utils/fileStorage';

export const uploadFile = async (req: Request, res: Response) => {
  try {
    upload.single('file');
    res.status(200).json('File has been uploaded');
  } catch (err) {
    res.status(404).json('File has not been uploaded');
  }
};
