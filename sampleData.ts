import { Child } from "./basicModels/child";
import { Parent } from "./basicModels/parent";
import { Weight } from "./basicModels/weights";
export const patients: Array<Child> = [
  {
    firstName: "Joe",
    lastName: "Smith",
    dateOfBirth: new Date(2020, 11, 24),
    address: "89 Chillded Street",
    nhsNumber: "739 4794 475",
    birthWeightInKg: 7.4,
  },
  {
    firstName: "Terry",
    lastName: "Medhurst",
    dateOfBirth: new Date(2019, 3, 14),
    address: "89 Chillded Street",
    nhsNumber: "739 4794 734",
    birthWeightInKg: 7.4,
  },
  {
    firstName: "Sheldon",
    lastName: "Quigley",
    dateOfBirth: new Date(2018, 3, 4),
    address: "89 Chillded Street",
    nhsNumber: "739 4794 475",
    birthWeightInKg: 7.4,
  },
];

export const parents: Array<Parent> = [
  {
    firstName: "Terrill",
    lastName: "Hills",
    dateOfBirth: new Date(1992, 12, 30),
    address: "560 Penstock Drive",
    contactNumber: "075 5394 334",
    username: "t.hills",
    password: "password",
    email: "t.hills@gmail.com",
    occupation: "Senior Cost Accountant",
  },
];

export const weights: Array<Weight> = [
  { dateOfWeight: new Date(2022, 10, 23), ageInWeeks: 45, weight: 5.5 },
];
