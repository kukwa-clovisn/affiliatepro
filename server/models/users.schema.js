import { defineMongooseModel } from "#nuxt/mongoose";

const commentSchema = defineMongooseModel({
  name: "comments",
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },
  likes: {
    type: Number,
    required: false,
  },
  tags: {
    type: Array,
    required: false,
  },
  collection: "comments",
});

export const userSchema = defineMongooseModel(
  {
    name: "userModel",
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    likes: {
      type: Number,
      required: false,
    },
    tags: {
      type: Array,
      required: false,
    },
    comments: [commentSchema],
  },
  {
    collection: "users",
  }
);
