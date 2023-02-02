export type Person = {
  id: String;
  firstName: String;
  lastName: String;
  dateOfBirth: Date;
  address: String;
};

export type Child = Person & {
  nhsNumber: String;
  birthWeightInKg?: number | null;
  birthHospital?: String | null;
  picture?: String;
  birthHeight?: number | null;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
};
