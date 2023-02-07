import mongoose from "mongoose";

const { Schema } = mongoose;

const ChildSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  nhsNumber: { type: String },
  birthWeight: { type: Number },
  birthHeight: { type: Number },
});

export default ChildSchema;
