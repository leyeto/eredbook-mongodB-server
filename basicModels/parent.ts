import { Person } from "./child";

export type Parent = Person & {
  contactNumber: String;
  username: String;
  password: String;
  occupation?: String;
};
