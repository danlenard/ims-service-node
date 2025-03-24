import { sequelize } from "../db"; // Adjust path as needed
import { SubscriberModel } from "../models/subscriber";
import { FeatureModel } from "../models/feature";
import { faker } from "@faker-js/faker";
import bcrypt from "bcryptjs";
import { SubscriberStatus } from "../types/subscriber";

const generateDomain = (): string => {
  const mnc = faker.number.int({ min: 0, max: 999 }).toString().padStart(3, "0");
  const mcc = faker.number.int({ min: 0, max: 460 }).toString().padStart(3, "0");
  return `ims.mnc${mnc}.mcc${mcc}.3gppnetwork.org`; 
};

const hashPassword = async (): Promise<string> => {
  const password = faker.internet.password();
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const generateSubscriber = async () => ({
  phoneNumber: faker.string.numeric(10),
  username: faker.internet.username(),
  password: await hashPassword(),
  domain: generateDomain(),
  status: faker.helpers.arrayElement(Object.values(SubscriberStatus)),
});

const generateFeature = (phoneNumber: string) => ({
  phoneNumber,
  callForwardNoReplyProvisioned: faker.datatype.boolean(),
  callForwardNoReplyDestination: `tel:+${faker.string.numeric(10)}`, 
});

const seedDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });

    await Promise.all(
      Array.from({ length: 10 }).map(async () => {
        const subscriberData = await generateSubscriber();
        const subscriber = await SubscriberModel.create(subscriberData);
        await FeatureModel.create(generateFeature(subscriber.phoneNumber));
      })
    );

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
