import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const ClinicianType = new GraphQLObjectType({
  name: "Clinican",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    badgeNumber: { type: GraphQLString },
    NMCPin: { type: GraphQLString },
    department: { type: GraphQLString },
    isActive: { type: GraphQLBoolean },
  }),
});
export default ClinicianType;
