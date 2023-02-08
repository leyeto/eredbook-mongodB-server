"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const ClinicianSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    dateOfBirth: { type: Date },
    username: { type: String },
    password: { type: String },
    role: { type: String },
    badgeNumber: { type: String },
    NMCPin: { type: String },
    department: { type: String },
});
exports.default = mongoose_1.default.model("Clinician", ClinicianSchema);
//# sourceMappingURL=Clinician.js.map