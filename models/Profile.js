const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
    skillOne: {
      type: String,
      required: true,
    },
    skillTwo: {
      type: String,
    },
    skillThree: {
      type: String,
    },
    summary: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
