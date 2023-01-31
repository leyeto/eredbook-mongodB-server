import { Person } from "./child";

export type Parent = Person & {
  contactNumber: String;
};
