"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
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
module.exports = mongoose_1.default.model("Child", ChildSchema);
//# sourceMappingURL=Child.js.map