"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
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
module.exports = mongoose_1.default.model("Clinician", ClinicianSchema);
//# sourceMappingURL=Clinician.js.map