import { connect } from 'mongoose';
import { config } from '../config/config';

export const connectDb = async () => {
  await connect(config.mongo.url, config.mongo.options);

  console.log('Connected to MongoDB');
};

connectDb().catch(err => console.error('Error connecting to MongoDB', err));
