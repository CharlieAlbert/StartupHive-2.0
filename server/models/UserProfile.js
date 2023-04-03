const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userProfile = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
      type: Number,
    },
    mobile: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserProfile = ("userProfile", userProfile);
module.export = UserProfile;
