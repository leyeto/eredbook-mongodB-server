export type Weight = {
  weightId: String;
  dateOfWeight: Date;
  ageInWeeks: number;
  weight: number;
  height?: number;
  otherMeasurementsName?: String;
  otherMeasurementsNumber?: number;
  clinicianId: String;
};
