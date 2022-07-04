import express, { json } from 'express';
import 'express-async-errors';
import rateLimit from 'express-rate-limit';
import { postRouter } from './routers/post.router';
import cors from 'cors';
import { config } from './config/config';
import { handleError } from './utils/errors';
import { runDb } from './utils/db';
//@TODO add method override?

const app = express();

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

app.use('/', postRouter);

app.use(runDb);

app.use(handleError);

app.listen(3001, '0.0.0.0', () => console.log(`Server started on port http://localhost:${config.PORT}`));
