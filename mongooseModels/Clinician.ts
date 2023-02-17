import mongoose from "mongoose";
const { Schema } = mongoose;

const ClinicianSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  dateOfBirth: { type: Date },
  username: { type: String, require: true, unique: true },
  password: { type: String, default: "password" },
  role: { type: String, required: true },
  badgeNumber: { type: String },
  NMCPin: { type: String },
  department: { type: String },
  isAcive: { type: Boolean },
});

module.exports = mongoose.model("Clinician", ClinicianSchema);
