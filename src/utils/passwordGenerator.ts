import bcrypt from "bcryptjs";
import { faker } from "@faker-js/faker";

export const generateHashedPassword = async (): Promise<string> => {
  const password = faker.internet.password(); // Random password
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};