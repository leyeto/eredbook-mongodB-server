import { children, parents, weights, clinicians } from "../sampleData";
import { Schema } from "mongoose";

const Child = require("../mongooseModels/Child");
const Clinician = require("../mongooseModels/Clinician");
const Note = require("../mongooseModels/Note");
const Parent = require("../mongooseModels/Parent");
const Weight = require("../mongooseModels/Weight");

import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import ChildType from "./TypeDefs/ChildType";
import WeightType from "./TypeDefs/WeightType";
import ClinicianType from "./TypeDefs/ClinicianType";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getChildByNhsNumber: {
      type: ChildType,
      args: { nhsNumber: { type: GraphQLNonNull(GraphQLString) } },
      resolve(parent, args) {
        return Child.findOne({ nhsNumber: args.nhsNumber });
      },
    },
    getChildById: {
      type: ChildType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Child.findById(args.id);
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
    getClinicians: {
      type: new GraphQLList(ClinicianType),
      resolve: (parent, args) => Clinician.find(),
    },
    getActiveClinicians: {
      type: new GraphQLList(ClinicianType),
      resolve: (parent, args) => Clinician.find({ isActive: true }),
    },
    getClinician: {
      type: new GraphQLList(ClinicianType),
      args: {
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        badgeNumber: { type: GraphQLString },
        NMCPin: { type: GraphQLString },
      },
      resolve: (_parent, args) => {
        if (args.id) {
          return Clinician.findById(args.id);
        }
        if (args.username) {
          return Clinician.findOne({ username: args.username });
        }
        if (args.badgeNumber) {
          return Clinician.findOne({ badgeNumber: args.badgeNumber });
        }
        if (args.NMCPin) {
          return Clinician.findOne({ NMCPin: args.NMCPin });
        }
      },
    },
    getChildNotes: {
      type: new GraphQLList(Note),
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        nhsNumber: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Note.find;
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
    // Update Child Change child's details
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
    // Clinician Mutations
    addClinician: {
      type: ClinicianType,
      args: {
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        dateOfBirth: { type: GraphQLString },
        username: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        role: { type: GraphQLNonNull(GraphQLString) },
        badgeNumber: { type: GraphQLString },
        NMCPin: { type: GraphQLString },
        department: { type: GraphQLString },
        isActive: { type: GraphQLBoolean, defaultValue: true },
      },
      resolve: (_parent, args) => {
        const clinician = new Clinician({
          firstName: args.firstName,
          lastName: args.lastName,
          dateOfBirth: args.dateOfBirth,
          username: args.username,
          password: args.password,
          role: args.role,
          badgeNumber: args.badgeNumber,
          NMCPin: args.NMCPin,
          department: args.department,
          isActive: args.isAcive,
        });
        return clinician.save();
      },
    },
    // Deactivate Clinican
    deactivateClinician: {
      type: ClinicianType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (_parent, args) => {
        return Clinician.findByIdAndUpdate(args.id, {
          $set: {
            isActive: false,
          },
        });
      },
    },
    activateClinician: {
      type: ClinicianType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (_parent, args) => {
        return Clinician.findByIdAndUpdate(args.id, {
          $set: {
            isActive: true,
          },
        });
      },
    },
    updateClinician: {
      type: ClinicianType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        dateOfBirth: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        role: { type: GraphQLString },
        badgeNumber: { type: GraphQLString },
        NMCPin: { type: GraphQLString },
        department: { type: GraphQLString },
      },
      resolve: (_parent, args) => {
        return Clinician.findByIdAndUpdate(
          args.id,
          {
            $set: {
              firstName: args.firstName,
              lastName: args.lastName,
              dateOfBirth: args.dateOfBirth,
              username: args.username,
              password: args.lastName,
              role: args.role,
              badgeNumber: args.badgeNumber,
              NMCPin: args.NMCPin,
              department: args.department,
            },
          },
          console.log(
            "Update returns old data instead of new data, state might be used to fix this on the frontend"
          )
        );
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
