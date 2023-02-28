"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const ChildType_1 = __importDefault(require("../TypeDefs/ChildType"));
const Child = require("../../mongooseModels/Child");
const mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        //Add Child
        addChild: {
            type: ChildType_1.default,
            args: {
                firstName: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                lastName: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                dateOfBirth: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                address: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                birthWeightInKg: { type: graphql_1.GraphQLFloat, defaultValue: null },
                birthHeightInCm: { type: graphql_1.GraphQLFloat, defaultValue: null },
                nhsNumber: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                birthHospital: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                picture: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString), defaultValue: null },
            },
            resolve(parent, args) {
                const child = new Child({
                    firstName: args.firstName,
                    lastName: args.lastName,
                    dateOfBirth: args.dateOfBirth,
                    address: args.address,
                    birthWeightInKg: args.birthWeightInKg,
                    birthHeightInCm: args.birthHeightInCm,
                    nhsNumber: args.nhsNumber,
                    birthHospital: args.birthHospital,
                    picture: args.picture,
                });
                return child.save();
            },
        },
        updateChild: {
            type: ChildType_1.default,
            args: {
                id: { type: graphql_1.GraphQLID },
                firstName: { type: graphql_1.GraphQLString },
                lastName: { type: graphql_1.GraphQLString },
                dateOfBirth: { type: graphql_1.GraphQLString },
                address: { type: graphql_1.GraphQLString },
                birthWeightInKg: { type: graphql_1.GraphQLFloat },
                birthHeightInCm: { type: graphql_1.GraphQLFloat },
                nhsNumber: { type: graphql_1.GraphQLString },
                birthHospital: { type: graphql_1.GraphQLString },
                picture: { type: graphql_1.GraphQLString },
            },
            resolve(parent, args) {
                return Child.findByIdAndUpdate(args.id, {
                    $set: {
                        firstName: args.firstName,
                        lastName: args.lastName,
                        dateOfBirth: args.dateOfBirth,
                        address: args.address,
                        birthWeightInKg: args.birthWeightInKg,
                        birthHeightInCm: args.birthHeightInCm,
                        nhsNumber: args.nhsNumber,
                        birthHospital: args.birthHospital,
                        picture: args.picture,
                    },
                });
            },
        },
        deleteChild: {
            type: ChildType_1.default,
            args: {
                id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID) },
            },
            resolve(parent, args) {
                return Child.findByIdAndRemove(args.id);
            },
        },
    }),
});
module.exports = new graphql_1.GraphQLSchema({
    mutation,
});
//# sourceMappingURL=childMutatations.js.map