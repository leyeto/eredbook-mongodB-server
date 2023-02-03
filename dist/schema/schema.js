"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sampleData_1 = require("../sampleData");
const graphql_1 = require("graphql");
//Patient
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
module.exports = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
//# sourceMappingURL=schema.js.map