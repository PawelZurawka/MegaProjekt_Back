import { connect } from 'mongoose';
import { config } from '../config/config';

export const runDb = async () => {
  await connect(config.mongo.url, config.mongo.options);

  console.log('Connected to MongoDB');
};

runDb().catch(err => console.log(err));
