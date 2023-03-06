import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Schema } from "mongoose";

export const NotesType = new GraphQLObjectType({
  name: "Note",
  fields: () => ({
    noteId: { type: GraphQLID },
    dateOfEntry: { type: GraphQLString },
    comment: { type: GraphQLString },
    nameAndDesignation: { type: GraphQLString },
    clinicianBadgeNumber: { type: GraphQLString },
  }),
});
