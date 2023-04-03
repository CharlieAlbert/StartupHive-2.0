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
      required: true,
    },
    phone: {
      type: String,
    },
    mobile: {
      type: String,
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

const UserProfile = mongoose.model("UserProfile", userProfile);
module.exports = UserProfile;
