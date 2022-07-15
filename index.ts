import express, { json, Router } from 'express';
import 'express-async-errors';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import { postRouter } from './routers/post.router';
import { config } from './config/config';
import { handleError } from './utils/errors';
// import { connectDb } from './utils/db';
import { uploadFileRouter } from './routers/upload-file.router';
import { authRouter } from './routers/auth.router';
import { userRouter } from './routers/user.router';
import { categoryRouter } from './routers/category.router';
import mongoose from 'mongoose';

const app = express();
const router = Router();

app.use(
  cors({
    origin: config.corsOrigin,
  })
);
app.use(json());

app.use(express.static('public'));

mongoose.connect(config.mongo.url).then(r => r);

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);

router.use('/upload', uploadFileRouter);
router.use('/posts', postRouter);
router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);

app.use('/api', router);

// app.use(connectDb);

app.use(handleError);

app.listen(config.server.port, '0.0.0.0', () => console.log(`Server started on port ${config.server.hostname}:${config.server.port}`));
