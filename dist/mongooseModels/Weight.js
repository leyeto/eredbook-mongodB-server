"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const weightSchema = new Schema({
    dateOfWeight: { type: Date, default: Date.now },
    ageInWeeks: { type: Number },
    weight: { type: Number },
    height: { type: Number },
    otherMeasurementsName: { type: String },
    otherMeasurementsNumber: { type: Number },
    clinicianId: { type: Schema.Types.ObjectId, ref: "Clinican" },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Weight", weightSchema);
//# sourceMappingURL=Weight.js.map