const mongoose = require("mongoose");
const permissions = require("mongoose-permissions");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const projectSchema = new Schema({
  jobAdTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
}).plugin(permissions);

userSchema.plugin(passportLocalMongoose);
const Project = mongoose.model("Project", userSchema);

module.exports = Project;
