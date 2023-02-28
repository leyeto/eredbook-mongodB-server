"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const ClinicianType_1 = __importDefault(require("./ClinicianType"));
const Clinician = require("../../mongooseModels/Clinician");
const WeightType = new graphql_1.GraphQLObjectType({
    name: "Weight",
    fields: () => ({
        weightID: { type: graphql_1.GraphQLID },
        dateOfWeight: { type: graphql_1.GraphQLString },
        ageInWeeks: { type: graphql_1.GraphQLFloat },
        weight: { type: graphql_1.GraphQLFloat },
        height: { type: graphql_1.GraphQLFloat },
        OtherMeasurementsMetric: { type: graphql_1.GraphQLString },
        OtherMeasurementsMeasured: { type: graphql_1.GraphQLFloat },
        clinician: {
            type: ClinicianType_1.default,
            resolve(parent, args) {
                return Clinician.findbyId(parent.args.id);
            },
        },
    }),
});
exports.default = WeightType;
//# sourceMappingURL=WeightType.js.map