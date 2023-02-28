import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const NotesType = new GraphQLObjectType({
  name: "Note",
  fields: () => ({
    noteID: { type: GraphQLID },
    dateOfEntry: { type: GraphQLString },
    comment: { type: GraphQLString },
    nameAndDesignation: { type: GraphQLString },
    clinicanBadgeNumber: { type: GraphQLString },
  }),
});

export default NotesType;
