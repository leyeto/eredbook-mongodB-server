import { Person } from "./child";

export type Parent = Person & {
  contactNumber: String;
  username: String;
  password: String;
  email: String;
  occupation?: String;
};
// export type Person = {
//   id: String;
//   firstName: String;
//   lastName: String;
//   dateOfBirth: Date;
//   address: String;
// };
