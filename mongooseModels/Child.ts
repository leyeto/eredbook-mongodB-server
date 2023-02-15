import mongoose from "mongoose";

const { Schema } = mongoose;

type Child = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  address: string;
  birthWeightInKg: number;
  birthHeightInCm: number;
  birthHospital: string;
  picture: string;
  bloodGroup: BloodGroupTypes;
  genotype: GenoTypes;
};
enum BloodGroupTypes {
  "A+",
  "A-",
  "B+",
  "B-",
  "O+",
  "O-",
  "AB+",
  "AB-",
}
enum GenoTypes {
  "AA",
  "AS",
  "SS",
  "AC",
}

const ChildSchema = new Schema<Child>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  address: { type: String, required: true },
  birthWeightInKg: { type: Number, required: true },
  birthHeightInCm: { type: Number, required: true },
  birthHospital: { type: String, required: false },
  picture: { type: String, required: false },
  bloodGroup: { enum: BloodGroupTypes, required: false },
  genotype: { enum: GenoTypes, required: false },
});

module.exports = mongoose.model("Child", ChildSchema);
