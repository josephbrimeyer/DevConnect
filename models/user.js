const mongoose = require("mongoose");
const permissions = require("mongoose-permissions");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 6,
  },
  // role: {
  //   type: String,
  //   enum: ["Creator", "Contributor", "Recipient"],
  // },
  // contactList: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
  googleId: {
    type: String,
  },
}).plugin(permissions);

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);

module.exports = User;

// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
// const bcrypt = require("bcryptjs");
// Creating our User model
// module.exports = function (sequelize, DataTypes) {
// const User = sequelize.define("User", {
// The email cannot be null, and must be a proper email before creation
// email: {
//   type: DataTypes.STRING,
//   allowNull: false,
//   unique: true,
//   validate: {
//     isEmail: true,
//   },
// },
// The password cannot be null
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });
// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
// User.prototype.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
//   User.addHook("beforeCreate", (user) => {
//     user.password = bcrypt.hashSync(
//       user.password,
//       bcrypt.genSaltSync(10),
//       null
//     );
//   });
//   return User;
// };
