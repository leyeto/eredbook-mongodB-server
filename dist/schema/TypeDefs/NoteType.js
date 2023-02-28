"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const NotesType = new graphql_1.GraphQLObjectType({
    name: "Note",
    fields: () => ({
        noteID: { type: graphql_1.GraphQLID },
        dateOfEntry: { type: graphql_1.GraphQLString },
        comment: { type: graphql_1.GraphQLString },
        nameAndDesignation: { type: graphql_1.GraphQLString },
        clinicanBadgeNumber: { type: graphql_1.GraphQLString },
    }),
});
exports.default = NotesType;
//# sourceMappingURL=NoteType.js.map