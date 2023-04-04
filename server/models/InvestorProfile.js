const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userProfile = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", userProfile);
module.exports = Profile;
