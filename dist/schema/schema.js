"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Child = require("../mongooseModels/Child");
const Clinician = require("../mongooseModels/Clinician");
const Note = require("../mongooseModels/Note");
const Parent = require("../mongooseModels/Parent");
const Weight = require("../mongooseModels/Weight");
const graphql_1 = require("graphql");
//Child
const ChildType = new graphql_1.GraphQLObjectType({
    name: "Child",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        firstName: { type: graphql_1.GraphQLString },
        lastName: { type: graphql_1.GraphQLString },
        dateOfBirth: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        nhsNumber: { type: graphql_1.GraphQLString },
        birthWeightInKg: { type: graphql_1.GraphQLFloat },
        birthHospital: { type: graphql_1.GraphQLString },
        picture: { type: graphql_1.GraphQLString },
        birthHeight: { type: graphql_1.GraphQLFloat },
        bloodGroup: { type: graphql_1.GraphQLString },
    }),
});
const WeightType = new graphql_1.GraphQLObjectType({
    name: "Weight",
    fields: () => ({
        weightID: { type: graphql_1.GraphQLID },
        dateOfWeight: { type: graphql_1.GraphQLString },
        ageInWeeks: { type: graphql_1.GraphQLFloat },
        weight: { type: graphql_1.GraphQLFloat },
        height: { type: graphql_1.GraphQLFloat },
        OtherMeasurementsMetric: { type: graphql_1.GraphQLString },
        OtherMeasurementsMeasured: { type: graphql_1.GraphQLFloat },
        clinician: {
            type: ClinicianType,
            resolve(parent, args) {
                return Clinician.findbyId(parent.args.id);
            },
        },
    }),
});
// ClinicianType
const ClinicianType = new graphql_1.GraphQLObjectType({
    name: "Clinican",
    fields: () => ({
        clinicianID: { type: graphql_1.GraphQLID },
        firstName: { type: graphql_1.GraphQLString },
        lastName: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        role: { type: graphql_1.GraphQLString },
        badgeNumber: { type: graphql_1.GraphQLString },
        NMCPin: { type: graphql_1.GraphQLString },
        department: { type: graphql_1.GraphQLString },
    }),
});
// ParentType
const ParentType = new graphql_1.GraphQLObjectType({
    name: "Parent",
    fields: () => ({
        parentID: { type: graphql_1.GraphQLID },
        firstName: { type: graphql_1.GraphQLString },
        lastName: { type: graphql_1.GraphQLString },
        dateOfBirth: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        contactNumber: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        occupation: { type: graphql_1.GraphQLString },
    }),
});
// NotesType
const NotesType = new graphql_1.GraphQLObjectType({
    name: "Note",
    fields: () => ({
        noteID: { type: graphql_1.GraphQLID },
        dateOfEntry: { type: graphql_1.GraphQLString },
        comment: { type: graphql_1.GraphQLString },
        nameAndDesignation: { type: graphql_1.GraphQLString },
        clinicanBadgeNumber: { type: graphql_1.GraphQLString },
    }),
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getChildByNhsNumber: {
            type: ChildType,
            args: { nhsNumber: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return Child.findbyId(args.nhsNumber);
            },
        },
        child: {
            type: ChildType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return Child.findbyId(args.id);
            },
        },
        getChildren: {
            type: new graphql_1.GraphQLList(ChildType),
            resolve(parent, args) {
                return Child.find();
            },
        },
        getWeights: {
            type: new graphql_1.GraphQLList(WeightType),
            resolve(parent, args) {
                return Weight.find();
            },
        },
    },
});
//Mutations
const mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        // Add Child
        addChild: {
            type: ChildType,
            args: {
                firstName: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                lastName: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                dateOfBirth: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                address: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                birthWeightInKg: { type: graphql_1.GraphQLFloat, defaultValue: null },
                birthHeight: { type: graphql_1.GraphQLFloat, defaultValue: null },
                nhsNumber: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                birthHospital: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                picture: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString), defaultValue: null },
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
                id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID) },
                firstName: { type: graphql_1.GraphQLString },
                lastName: { type: graphql_1.GraphQLString },
                dateOfBirth: { type: graphql_1.GraphQLString },
                address: { type: graphql_1.GraphQLString },
                birthWeightInKg: { type: graphql_1.GraphQLFloat },
                birthHeight: { type: graphql_1.GraphQLFloat },
                nhsNumber: { type: graphql_1.GraphQLString },
                birthHospital: { type: graphql_1.GraphQLString },
                picture: { type: graphql_1.GraphQLString },
            },
            resolve(parent, args) {
                return Child.findByIdAndUpdate(args.id, {
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
                });
            },
        },
        deleteChild: {
            type: ChildType,
            args: {
                id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID) },
            },
            resolve(parent, args) {
                return Child.findByIdAndRemove(args.id);
            },
        },
    }),
});
module.exports = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation,
});
//# sourceMappingURL=schema.js.map