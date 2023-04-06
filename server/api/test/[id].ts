import {defineEventHandler, getQuery} from "h3";
// import { TestModel } from '~/models/Test';

export default defineEventHandler(async (event) => {
  // const id = event.context.params.id;
  // const query = getQuery(event);
  // const list = await TestModel.find();
  // console.log('TestModel=>', TestModel);

  return {
    list: [],
  };
})
