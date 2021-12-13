import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
declare global {
    export namespace NodeJS {
      export interface ProcessEnv {
        MONGO_URI: string
        PORT: string
        JWT_SECRET: string
      }
    }
}

const { MONGO_URI } = process.env;

const bootsTrap = () => {
  mongoose.connect(
    MONGO_URI,
  ).catch((err) => { console.log(err); });
};

bootsTrap();

export default mongoose;
