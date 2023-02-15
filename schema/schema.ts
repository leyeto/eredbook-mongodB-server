import { children, parents, weights, clinicians } from "../sampleData";
import { Schema } from "mongoose";

const Child = require("../mongooseModels/Child");
const Clinician = require("../mongooseModels/Clinician");
const Note = require("../mongooseModels/Note");
const Parent = require("../mongooseModels/Parent");
const Weight = require("../mongooseModels/Weight");

import {
  GraphQLFloat,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

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
    weightID: { type: GraphQLID },
    dateOfWeight: { type: GraphQLString },
    ageInWeeks: { type: GraphQLFloat },
    weight: { type: GraphQLFloat },
    height: { type: GraphQLFloat },
    OtherMeasurementsMetric: { type: GraphQLString },
    OtherMeasurementsMeasured: { type: GraphQLFloat },
    clinician: {
      type: ClinicianType,
      resolve(parent, args) {
        return Clinician.findbyId(parent.args.id);
      },
    },
  }),
});

// ClinicianType
const ClinicianType = new GraphQLObjectType({
  name: "Clinican",
  fields: () => ({
    clinicianID: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    badgeNumber: { type: GraphQLString },
    NMCPin: { type: GraphQLString },
    department: { type: GraphQLString },
  }),
});

// ParentType
const ParentType = new GraphQLObjectType({
  name: "Parent",
  fields: () => ({
    parentID: { type: GraphQLID },
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

// NotesType
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

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getChildByNhsNumber: {
      type: ChildType,
      args: { nhsNumber: { type: GraphQLID } },
      resolve(parent, args) {
        return Child.findbyId(args.nhsNumber);
      },
    },
    child: {
      type: ChildType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Child.findbyId(args.id);
      },
    },
    getChildren: {
      type: new GraphQLList(ChildType),
      resolve(parent, args) {
        return Child.find();
      },
    },
    getWeights: {
      type: new GraphQLList(WeightType),
      resolve(parent, args) {
        return Weight.find();
      },
    },
  },
});

//Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    // Add Child
    addChild: {
      type: ChildType,
      args: {
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        dateOfBirth: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLNonNull(GraphQLString) },
        birthWeightInKg: { type: GraphQLFloat, defaultValue: null },
        birthHeight: { type: GraphQLFloat, defaultValue: null },
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
          birthHeight: args.birthHeight,
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
        id: { type: GraphQLNonNull(GraphQLID) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        dateOfBirth: { type: GraphQLString },
        address: { type: GraphQLString },
        birthWeightInKg: { type: GraphQLFloat },
        birthHeight: { type: GraphQLFloat },
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
              birthHeight: args.birthHeight,
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
  query: RootQuery,
  mutation,
});
