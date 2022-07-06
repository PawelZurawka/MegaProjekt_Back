import { Request, Response, Router } from 'express';

export const pageNotFoundRouter = Router().all('*', (req: Request, res: Response) => {
  res.status(404).send('404 NOT FOUND');
});
