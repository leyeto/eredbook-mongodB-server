"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
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
        birthHospital: { type: graphql_1.GraphQLString },
        picture: { type: graphql_1.GraphQLString },
        birthHeightInCm: { type: graphql_1.GraphQLFloat },
        bloodGroup: { type: graphql_1.GraphQLString },
    }),
});
exports.default = ChildType;
//# sourceMappingURL=ChildType.js.map