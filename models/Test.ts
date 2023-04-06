import {prop, getModelForClass } from "@typegoose/typegoose";

export class TestClass {

  @prop({ required: true, trim: true })
  username: string

  @prop({ required: true })
  age: number
}

export const TestModel = getModelForClass(TestClass);
