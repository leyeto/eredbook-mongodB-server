import { children, parents, weights } from "../sampleData";
import {
  GraphQLFloat,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

//Patient

const ChildType = new GraphQLObjectType({
  name: "Child",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    dateOfBirth: { type: GraphQLString },
    address: { type: GraphQLString },
    nhsNumber: { type: GraphQLString },
    birthWeightInKg: { type: GraphQLFloat },
  }),
});
