import { Request } from 'express';
import multer from 'multer';
import { DestinationCallback, FileNameCallback } from '../types';

const fileStorage = multer.diskStorage({
  destination: (request: Request, file: Express.Multer.File, callback: DestinationCallback): void => {
    callback(null, 'public/images');
  },

  filename: (req: Request, file: Express.Multer.File, callback: FileNameCallback): void => {
    // callback(null, req.body.name);
    callback(null, 'test.jpeg');
  },
});

export const upload = multer({ storage: fileStorage });
