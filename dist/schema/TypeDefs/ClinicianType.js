"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const ClinicianType = new graphql_1.GraphQLObjectType({
    name: "Clinican",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        firstName: { type: graphql_1.GraphQLString },
        lastName: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        role: { type: graphql_1.GraphQLString },
        badgeNumber: { type: graphql_1.GraphQLString },
        NMCPin: { type: graphql_1.GraphQLString },
        department: { type: graphql_1.GraphQLString },
        isActive: { type: graphql_1.GraphQLBoolean },
    }),
});
exports.default = ClinicianType;
//# sourceMappingURL=ClinicianType.js.map