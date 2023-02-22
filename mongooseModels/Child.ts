import mongoose from "mongoose";

const { Schema } = mongoose;

// type Child = {
//   firstName: string;
//   lastName: string;
//   dateOfBirth: Date;
//   address: string;
//   birthWeightInKg: number;
//   birthHeightInCm: number;
//   birthHospital: string;
//   picture: string;
//   bloodGroup: BloodGroupTypes;
//   genotype: GenoTypes;
// };
// enum BloodGroupTypes {
//   "A+",
//   "A-",
//   "B+",
//   "B-",
//   "O+",
//   "O-",
//   "AB+",
//   "AB-",
// }
// enum GenoTypes {
//   "AA",
//   "AS",
//   "SS",
//   "AC",
// }

const ChildSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  address: { type: String, required: true },
  birthWeightInKg: { type: Number },
  birthHeightInCm: { type: Number },
  birthHospital: { type: String, required: false },
  nhsNumber: { type: String, required: true, unique: true },
  picture: { type: String, required: false },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    required: false,
  },
  genotype: { type: String, enum: ["AA", "AS", "SS", "AC"], required: false },
});

module.exports = mongoose.model("Child", ChildSchema);
