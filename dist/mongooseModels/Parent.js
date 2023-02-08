"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const parentSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    dateOfBirth: { type: Date },
    address: { type: String },
    contactNumber: { type: String },
    username: { type: String },
    password: { type: String },
    email: { type: String },
    occupation: { type: String },
});
module.exports = mongoose_1.default.model("Parent", parentSchema);
//# sourceMappingURL=Parent.js.map