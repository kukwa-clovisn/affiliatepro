import { defineMongooseModel } from "#nuxt/mongoose";

export const subscriberSchema = defineMongooseModel(
  {
    name: "subscriberModel",
    email: {
      type: String,
      required: true,
    },
  },
  {
    collection: "subscribers",
  }
);
