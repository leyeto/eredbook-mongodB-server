import mongoose from "mongoose";
const { Schema } = mongoose;

const parentSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  dateOfBirth: { type: Date },
  address: { type: String },
  contactNumber: { type: String },
  username: { type: String },
  password: { type: String },
  email: { type: String },
  occupation: { type: String },
});

export default mongoose.model("Parent", parentSchema);
