import { SubscriberModel } from "../../models/subscriber";


export const formatSubscriber = (subscriber: SubscriberModel) => ({
  phoneNumber: subscriber.phoneNumber,
  username: subscriber.username,
  password: subscriber.password,
  domain: subscriber.domain,
  status: subscriber.status,
  features: subscriber.features
    ? {
        callForwardNoReply: {
          provisioned: subscriber.features.callForwardNoReplyProvisioned ?? false,
          destination: subscriber.features.callForwardNoReplyDestination ?? null,
        },
      }
    : null, // Ensure null instead of an empty object
});

export const formatSubscribers = (subscribers: SubscriberModel[]) =>
  subscribers.map(formatSubscriber);