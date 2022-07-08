import { Request, Response } from 'express';
import { upload } from '../utils/file-storage';

export const uploadFile = async (req: Request, res: Response) => {
  try {
    await upload.single('file');
    res.status(200).json('File has been uploaded');
  } catch (err) {
    res.status(404).json('Error. File has not been uploaded');
  }
};
