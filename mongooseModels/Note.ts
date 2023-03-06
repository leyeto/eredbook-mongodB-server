import mongoose from "mongoose";
const { Schema } = mongoose;

const NoteSchema = new Schema(
  {
    dateOfEntry: { type: Date, default: Date.now },
    comment: { type: String },
    nameAndDesignation: { type: Schema.Types.ObjectId, ref: "Clinician" },
    // clinicianBadgeNumer: { type: Schema.Types.ObjectId, ref: "Clinician" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", NoteSchema);
