const express = require("express");
const mongoose = require("mongoose");
passport = require("passport");
localStrategy = require("passport-local");
passportLocalMongoose = require("passport-local-mongoose");
GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
process.env.API_KEY;
process.env.DB_PASSWORD;

const methodOverride = require("method-override");
const session = require("express-session");
let bodyParser = require("body-parser");

const db = require("./models/index.js");
const User = require("./models/User.js");

// Middleware.
app.set("view engine", "ejs");

//User session.
app.use(
  session({
    secret: "devconnect",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(methodOverride("_method"));

// Parse incoming data into a JS object attached to the request.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GoogleStrategy within Passport.
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/users/auth/google/return",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);

      // Passport callback function.
      // Checks if the user already exists in our db with the given profile ID.
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log(profile);

          // If we already have a record with the given profile ID.
          done(null, currentUser);
        } else {
          // If not, creates a new user.
          user = new User({
            username: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
          user.save(function (err) {
            if (err) console.log(err);
            return done(null, user);
          });
        }
      });
    }
  )
);

// Connect passport packages.
app.use(passport.initialize());
app.use(passport.session());

// Read and encode data from the session.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// Serve up static assets (usually on heroku).
app.use(express.static("client/build"));

// Homepage route.
app.get("/", (req, res) => {
  res.send("DevConnect homepage");
});

// Routes.
const userRouter = require("./routes/users.js");
app.use("/users", userRouter);

// Server connection.
app.listen(PORT, () => {
  console.log(`🌎 ==> Server is now listening on port ${PORT}!`);
});
