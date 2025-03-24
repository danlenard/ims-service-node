export interface Feature {
  phoneNumber: string;
  callForwardNoReplyProvisioned: boolean;
  callForwardNoReplyDestination: string | null;
  deletedAt?: Date | null;
}