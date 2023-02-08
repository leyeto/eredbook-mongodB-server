import mongoose from "mongoose";
const { Schema } = mongoose;

const Clinician = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  dateOfBirth: { type: Date },
  username: { type: String },
  password: { type: String },
  role: { type: String },
  badgeNumber: { type: String },
  NMCPin: { type: String },
  department: { type: String },
});

export default Clinician;
