const express = require("express");
const { session } = require("passport");
const router = express.Router();
const userController = require("../controllers/users");

router.get("/login", userController.login);

//user registers
router.get("/register", userController.newUser);
router.post("/register", userController.createUser);

router.get("/logout", userController.logout);

router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("login");
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      console.log(req.user);
      return res.redirect("/");
    });
  })(req, res, next);
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// GET /auth/google/callback
router.get(
  "/auth/google/return",
  passport.authenticate("google", { failureRedirect: "users/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

module.exports = router;
