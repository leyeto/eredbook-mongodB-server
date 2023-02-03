"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sampleData_1 = require("../sampleData");
const Child = require("../basicModels/child");
const graphql_1 = require("graphql");
//Child
const ChildType = new graphql_1.GraphQLObjectType({
    name: "Child",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        firstName: { type: graphql_1.GraphQLString },
        lastName: { type: graphql_1.GraphQLString },
        dateOfBirth: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        nhsNumber: { type: graphql_1.GraphQLString },
        birthWeightInKg: { type: graphql_1.GraphQLFloat },
    }),
});
const WeightType = new graphql_1.GraphQLObjectType({
    name: "Weight",
    fields: () => ({
        dateOfWeight: { type: graphql_1.GraphQLString },
        ageInWeeks: { type: graphql_1.GraphQLFloat },
        weight: { type: graphql_1.GraphQLFloat },
        OtherMeasurementsMetric: { type: graphql_1.GraphQLString },
        OtherMeasurementsMeasured: { type: graphql_1.GraphQLFloat },
    }),
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getChildByNhsNumber: {
            type: ChildType,
            args: { nhsNumber: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return sampleData_1.children.find((child) => child.nhsNumber === args.nhsNumber);
            },
        },
        child: {
            type: ChildType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return sampleData_1.children.find((child) => child.id === args.id);
            },
        },
    },
});
//Mutations
const mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        // Add Child
        addChild: {
            type: ChildType,
            args: {
                firstName: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                lastName: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                dateOfBirth: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
            },
            resolve(parent, args) {
                const child = new Child({
                    firstName: args.firstName,
                    lastName: args.lastNmae,
                    dateOfBirth: args.dateOfBirth,
                });
                return child.save();
            },
        },
    },
});
module.exports = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
//# sourceMappingURL=schema.js.map