"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
var BloodGroupTypes;
(function (BloodGroupTypes) {
    BloodGroupTypes[BloodGroupTypes["A+"] = 0] = "A+";
    BloodGroupTypes[BloodGroupTypes["A-"] = 1] = "A-";
    BloodGroupTypes[BloodGroupTypes["B+"] = 2] = "B+";
    BloodGroupTypes[BloodGroupTypes["B-"] = 3] = "B-";
    BloodGroupTypes[BloodGroupTypes["O+"] = 4] = "O+";
    BloodGroupTypes[BloodGroupTypes["O-"] = 5] = "O-";
    BloodGroupTypes[BloodGroupTypes["AB+"] = 6] = "AB+";
    BloodGroupTypes[BloodGroupTypes["AB-"] = 7] = "AB-";
})(BloodGroupTypes || (BloodGroupTypes = {}));
var GenoTypes;
(function (GenoTypes) {
    GenoTypes[GenoTypes["AA"] = 0] = "AA";
    GenoTypes[GenoTypes["AS"] = 1] = "AS";
    GenoTypes[GenoTypes["SS"] = 2] = "SS";
    GenoTypes[GenoTypes["AC"] = 3] = "AC";
})(GenoTypes || (GenoTypes = {}));
const ChildSchema = new Schema({
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
module.exports = mongoose_1.default.model("Child", ChildSchema);
//# sourceMappingURL=Child.js.map