import { children, parents, weights } from "../sampleData";
const Child = require("../basicModels/child");
import {
  GraphQLFloat,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { argsToArgsConfig } from "graphql/type/definition";

//Child
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
    birthHeight: { type: GraphQLFloat },
    bloodGroup: { type: GraphQLString },
  }),
});
const WeightType = new GraphQLObjectType({
  name: "Weight",
  fields: () => ({
    dateOfWeight: { type: GraphQLString },
    ageInWeeks: { type: GraphQLFloat },
    weight: { type: GraphQLFloat },
    height: { type: GraphQLFloat },
    OtherMeasurementsMetric: { type: GraphQLString },
    OtherMeasurementsMeasured: { type: GraphQLFloat },
  }),
});

// Parent

const ParentType = new GraphQLObjectType({
  name: "Parent",
  fields: () => ({
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    dateOfBirth: { type: GraphQLString },
    address: { type: GraphQLString },
    contactNumber: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    occupation: { type: GraphQLString },
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

//Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add Child
    addChild: {
      type: ChildType,
      args: {
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        dateOfBirth: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const child = new Child({
          firstName: args.firstName,
          lastName: args.lastNmae,
          dateOfBirth: args.dateOfBirth,
        });
        return child.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
