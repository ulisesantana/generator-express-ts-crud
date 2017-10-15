import { Schema, model } from "mongoose";

export const TaskSchema: Schema = new Schema({
  name: String,
  done: {
    type: Boolean,
    default: false
  },
  createdAt: Date,
  updatedAt: Date
});

export default  model('Task', TaskSchema);
