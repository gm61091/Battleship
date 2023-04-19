/* This is a module exporting a router object that defines a protected route `/protected` that requires
a valid JSON Web Token (JWT) to access. The route returns a JSON object containing user information
such as wins, losses, name, email, and saved game. The JWT authentication is implemented using
Passport.js middleware. */
const express = require("express");
const router = express.Router();
const passport = require("passport");

router.use(passport.initialize());

require("../auth/passAuth");

let requireJwt = passport.authenticate("jwt", { session: false });

router.get("/protected", requireJwt, (req, res) => {
  res.json({
    isValid: true,
    wins: req.user.wins,
    losses: req.user.losses,
    name: req.user.name,
    email: req.user.email,
    savedGame: req.user.savedGame,
  });
});

module.exports = router;
