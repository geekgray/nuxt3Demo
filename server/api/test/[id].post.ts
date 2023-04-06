import {defineEventHandler, readBody} from "h3";
import { TestModel } from '~/models/Test';

export default defineEventHandler(async (event) => {
  // const body = await readBody(event);
  await TestModel.create({
    username: `王${Math.floor(Math.random() * 100)}`,
    age: Math.floor(Math.random() * 100),
  });

  return {
    method: 'post',
  };
})
