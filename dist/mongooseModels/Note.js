"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const NoteSchema = new Schema({
    dateOfEntry: { type: Date, default: Date.now },
    comment: { type: String },
    nameAndDesignation: { type: Schema.Types.ObjectId, ref: "Clinician" },
    clinicianBadgeNumer: { type: Schema.Types.ObjectId, ref: "Clinician" },
}, { timestamps: true });
module.exports = mongoose_1.default.model("Note", NoteSchema);
//# sourceMappingURL=Note.js.map