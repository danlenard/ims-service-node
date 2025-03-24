import { Feature } from "./feature";

export interface Subscriber {
  phoneNumber: string;
  username: string;
  password: string;
  domain: string;
  status: SubscriberStatus;
  deletedAt?: Date | null;
  features?: Feature;
}

export enum SubscriberStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
  DELETED = "DELETED",
}
