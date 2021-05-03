const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema([
  {
    name: "Developer",
    permissions: [
      {
        name: "create-profile",
      },
      {
        name: "view-profile",
      },
      {
        name: "edit-profile",
      },
      {
        name: "delete-profile",
      },
      {
        name: "create-project",
      },

      {
        name: "view-project",
      },
      {
        name: "edit-project",
      },
      {
        name: "delete-project",
      },
    ],
  },
  {
    name: "Client",
    permissions: [
      {
        name: "view-profile",
      },
      {
        name: "create-project",
      },

      {
        name: "view-project",
      },
      {
        name: "edit-project",
      },
      {
        name: "delete-project",
      },
    ],
  },
]);

const Role = mongoose.model("Role", userSchema);
module.exports = Role;
