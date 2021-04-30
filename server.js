const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
process.env.API_KEY;
process.env.DB_PASSWORD;

// Requiring passport as we've configured it
const passport = require("passport");
const localStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const methodOverride = require("method-override");

const db = require("./models/index.js");
const User = require("./models/user.js");
const session = require("express-session");
let bodyParser = require("body-parser");

//Linkedin Login using node js and passport
// const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
// const routes = require("./routes/api-routes");
// const config = require("./config");

// Middleware
app.set("view engine", "ejs");

//User session
app.use(
  session({
    secret: "devconnect",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(methodOverride("_method"));

// parse incoming data into a JS object attached to the request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GoogleStrategy within Passport
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/users/auth/google/return",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      // passport callback function
      //check if user already exists in our db with the given profile ID
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log(profile);
          //if we already have a record with the given profile ID
          done(null, currentUser);
        } else {
          //if not, create a new user
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

//connect passport packages
app.use(passport.initialize());
app.use(passport.session());

//read and encode data from the session
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

// passport.serializeUser(function (user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//   cb(null, obj);
// });

// passport.use(
//   new LinkedInStrategy(
//     {
//       clientID: config.linkedinAuth.clientID,
//       clientSecret: config.linkedinAuth.clientSecret,
//       callbackURL: config.linkedinAuth.callbackURL,
//       scope: ["r_emailaddress", "r_liteprofile"],
//     },
//     function (token, tokenSecret, profile, done) {
//       return done(null, profile);
//     }
//   )
// );

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));

// We need to use sessions to keep track of our user's login status
// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// Define API routes here
// require("./controllers/memberController.js");
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);

//homepage route
app.get("/", (req, res) => {
  res.send("DevConnect homepage");
});

// routes
const userRouter = require("./routes/users.js");
app.use("/users", userRouter);
app.use("/", routes);

// Requiring our routes
// require("./routes/html-routes")(app);
// require("./routes/api-routes")(app);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
