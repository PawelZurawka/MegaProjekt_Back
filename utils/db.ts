import { connect } from 'mongoose';
import { config } from '../config/config';

export const runDb = async () => {
  await connect(config.DB);

  console.log('Connected to MongoDB');
};

runDb().catch(err => console.log(err));
