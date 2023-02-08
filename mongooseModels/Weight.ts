import mongoose from "mongoose";
const { Schema } = mongoose;

const weightSchema = new Schema(
  {
    dateOfWeight: { type: Date, default: Date.now },
    ageInWeeks: { type: Number },
    weight: { type: Number },
    height: { type: Number },
    otherMeasurementsName: { type: String },
    otherMeasurementsNumber: { type: Number },
    clinicianId: { type: Schema.Types.ObjectId, ref: "Clinican" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Weight", weightSchema);
