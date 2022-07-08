import express, { json, Router } from 'express';
import 'express-async-errors';
import rateLimit from 'express-rate-limit';
import { postRouter } from './routers/post.router';
import cors from 'cors';
import { config } from './config/config';
import { handleError } from './utils/errors';
import { connectDb } from './utils/db';
import { pageNotFoundRouter } from './routers/page-not-found.router';
import { uploadFileRouter } from './routers/uploadFile.router';
import { authRouter } from './routers/auth.router';

const app = express();
const router = Router();

app.use(
  cors({
    origin: config.corsOrigin,
  })
);
app.use(json());

app.use(express.static('public'));
// app.use('public/images', express.static(path.join(__dirname, 'public/images')));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);

router.use('/upload', uploadFileRouter);
router.use('/posts', postRouter);
router.use('/auth', authRouter);

app.use('/api', router);

app.use(pageNotFoundRouter);

app.use(connectDb);

app.use(handleError);

app.listen(config.server.port, '0.0.0.0', () => console.log(`Server started on port ${config.server.hostname}:${config.server.port}`));
