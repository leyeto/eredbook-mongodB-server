import mongoose from "mongoose";
const { Schema } = mongoose;

const ClinicianSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  dateOfBirth: { type: Date },
  username: { type: String, require: true, unique: true },
  password: { type: String, default: "password" },
  role: { type: String, required: true },
  badgeNumber: { type: String, required: true, unique: true },
  NMCPin: { type: String, required: true, unique: true },
  department: { type: String },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model("Clinician", ClinicianSchema);
