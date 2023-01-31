import { Child } from "./basicModels/child";
import { Parent } from "./basicModels/parent";
export const patients: Array<Child> = [
  {
    firstName: "Joe",
    lastName: "Smith",
    dateOfBirth: new Date("2020/03/04"),
    address: "89 Chillded Street",
    nhsNumber: "739 4794 475",
    birthWeightInKg: 7.4,
  },
  {
    firstName: "Terry",
    lastName: "Medhurst",
    dateOfBirth: new Date("2019/03/04"),
    address: "89 Chillded Street",
    nhsNumber: "739 4794 734",
    birthWeightInKg: 7.4,
  },
  {
    firstName: "Sheldon",
    lastName: "Quigley",
    dateOfBirth: new Date("2018/03/04"),
    address: "89 Chillded Street",
    nhsNumber: "739 4794 475",
    birthWeightInKg: 7.4,
  },
];

export const parents: Array<Parent> = [
  {
    firstName: "Terrill",
    lastName: "Hills",
    dateOfBirth: new Date("1992/12/30"),
    address: "560 Penstock Drive",
    contactNumber: "075 5394 334",
    username: "t.hills",
    password: "password",
    email: "t.hills@gmail.com",
    occupation: "Senior Cost Accountant",
  },
];
