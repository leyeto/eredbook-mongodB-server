import { Person } from "./child";

export type Parent = Person & {
  contactNumber: String;
  username: String;
  password: String;
  email: String;
  occupation?: String;
};
