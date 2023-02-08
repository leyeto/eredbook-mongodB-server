import mongoose from "mongoose";

const { Schema } = mongoose;

const ChildSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  dateOfBirth: { type: Date },
  address: { type: String },
  birthWeightInKg: { type: Number },
  birthHeight: { type: Number },
  nhsNumber: { type: String },
  birthHospital: { type: String },
  picture: { type: String },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  },
  genotype: { type: String, enum: ["AA", "AS", "SS", "AC"] },
});

export default mongoose.model("Child", ChildSchema);
