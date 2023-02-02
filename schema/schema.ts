import { children, parents, weights } from "../sampleData";
import {
  GraphQLFloat,
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
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
const WeightType = new GraphQLObjectType({
  name: "Weight",
  fields: () => ({
    dateOfWeight: { type: GraphQLString },
    ageInWeeks: { type: GraphQLFloat },
    weight: { type: GraphQLFloat },
    OtherMeasurementsMetric: { type: GraphQLString },
    OtherMeasurementsMeasured: { type: GraphQLFloat },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getChildByNhsNumber: {
      type: ChildType,
      args: { nhsNumber: { type: GraphQLID } },
      resolve(parent, args) {
        return children.find((child) => child.nhsNumber === args.nhsNumber);
      },
    },
    child: {
      type: ChildType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return children.find((child) => child.id === args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
