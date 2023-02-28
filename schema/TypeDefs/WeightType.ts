import {
  GraphQLFloat,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import ClinicianType from "./ClinicianType";
const Clinician = require("../../mongooseModels/Clinician");

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

export default WeightType;
