import mongoose from 'mongoose';
import {Nitro} from "nitropack";
import { TestModel } from '~/models/Test';

const dbConfig = {
  ip: '127.0.0.1',
  port: '27017',
  dbname: 'YS_NYC',
  name: '',
  password: ''
};
const mongoUrl = `mongodb://${dbConfig.ip}:${dbConfig.port}`;

export default async (_nitroApp: Nitro) => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(mongoUrl, {
      dbName: dbConfig.dbname
    });
    console.log('MongoDB connection successful.')
  } catch (err) {
    console.error('MongoDB connection error.', err)
  }
};
