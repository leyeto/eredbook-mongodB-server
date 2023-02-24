import {
  GraphQLFloat,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import ChildType from "../TypeDefs/ChildType";
const Child = require("../../mongooseModels/Child");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    //Add Child
    addChild: {
      type: ChildType,
      args: {
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        dateOfBirth: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLNonNull(GraphQLString) },
        birthWeightInKg: { type: GraphQLFloat, defaultValue: null },
        birthHeightInCm: { type: GraphQLFloat, defaultValue: null },
        nhsNumber: { type: GraphQLNonNull(GraphQLString) },
        birthHospital: { type: GraphQLNonNull(GraphQLString) },
        picture: { type: GraphQLNonNull(GraphQLString), defaultValue: null },
      },
      resolve(parent, args) {
        const child = new Child({
          firstName: args.firstName,
          lastName: args.lastName,
          dateOfBirth: args.dateOfBirth,
          address: args.address,
          birthWeightInKg: args.birthWeightInKg,
          birthHeightInCm: args.birthHeightInCm,
          nhsNumber: args.nhsNumber,
          birthHospital: args.birthHospital,
          picture: args.picture,
        });
        return child.save();
      },
    },
    updateChild: {
      type: ChildType,
      args: {
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        dateOfBirth: { type: GraphQLString },
        address: { type: GraphQLString },
        birthWeightInKg: { type: GraphQLFloat },
        birthHeightInCm: { type: GraphQLFloat },
        nhsNumber: { type: GraphQLString },
        birthHospital: { type: GraphQLString },
        picture: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Child.findByIdAndUpdate(
          args.id,

          {
            $set: {
              firstName: args.firstName,
              lastName: args.lastName,
              dateOfBirth: args.dateOfBirth,
              address: args.address,
              birthWeightInKg: args.birthWeightInKg,
              birthHeightInCm: args.birthHeightInCm,
              nhsNumber: args.nhsNumber,
              birthHospital: args.birthHospital,
              picture: args.picture,
            },
          }
        );
      },
    },
    deleteChild: {
      type: ChildType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Child.findByIdAndRemove(args.id);
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  mutation,
});
