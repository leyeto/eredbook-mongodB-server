"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
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
    picture: { type: String, required: false },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        required: false,
    },
    genotype: { type: String, enum: ["AA", "AS", "SS", "AC"], required: false },
});
module.exports = mongoose_1.default.model("Child", ChildSchema);
//# sourceMappingURL=Child.js.map