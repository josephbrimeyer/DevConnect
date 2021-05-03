const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    jobAdTitle: {
      type: String,
      maxLength: 100,
    },
    content: String,
    required: true,
    jobDescription: {
      type: String,
      maxLength: 250,
    },
    content: String,
    required: true,

    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
