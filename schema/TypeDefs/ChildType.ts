import {
  GraphQLFloat,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

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
    birthHospital: { type: GraphQLString },
    picture: { type: GraphQLString },
    birthHeightInCm: { type: GraphQLFloat },
    bloodGroup: { type: GraphQLString },
  }),
});

export default ChildType;
