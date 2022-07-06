import express, { json } from 'express';
import 'express-async-errors';
import rateLimit from 'express-rate-limit';
import { postRouter } from './routers/post.router';
import cors from 'cors';
import { config } from './config/config';
import { handleError } from './utils/errors';
import { connectDb } from './utils/db';

const app = express();

app.use(connectDb);

app.use(
  cors({
    origin: config.corsOrigin,
  })
);
app.use(json());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);

app.use('/api', postRouter);

app.use(handleError);

app.listen(config.server.port, '0.0.0.0', () => console.log(`Server started on port ${config.server.hostname}:${config.server.port}`));
