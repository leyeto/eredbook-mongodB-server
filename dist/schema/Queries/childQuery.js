"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const ChildType_1 = __importDefault(require("../TypeDefs/ChildType"));
const Child = require("../../mongooseModels/Child");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getChildByNhsNumber: {
            type: ChildType_1.default,
            args: { nhsNumber: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) } },
            resolve(parent, args) {
                return Child.find({ nhsNumber: args.nhsNumber });
            },
        },
        getChildById: {
            type: ChildType_1.default,
            args: { id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID) } },
            resolve(parent, args) {
                return Child.findById(args.id);
            },
        },
        getChildren: {
            type: new graphql_1.GraphQLList(ChildType_1.default),
            resolve(parent, args) {
                return Child.find();
            },
        },
    },
});
module.exports = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
//# sourceMappingURL=childQuery.js.map