/* This is a module exporting a router object that handles the login route for a web application. It
requires the `express`, `jwt-simple`, and `passport` modules, as well as a `secretObj` module that
contains a secret key for encoding and decoding JWT tokens. It initializes the passport middleware
and requires a local authentication strategy defined in another file. It defines a `requireLogin`
middleware that authenticates the user using the local strategy and generates a JWT token using the
`generateToken` function. Finally, it defines a `POST` route for `/login` that returns a JSON object
containing the generated token and some user data. */
const router = require("express").Router();
const jwt = require("jwt-simple");
const secretObj = require("../secrets");
const passport = require("passport");

router.use(passport.initialize());

require("../auth/passAuth");

const requireLogin = passport.authenticate("local", { session: false });

const generateToken = (userRecord) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: userRecord.id, iat: timestamp }, secretObj.secret);
};

router.post("/login", requireLogin, (req, res) => {
  res.json({
    token: generateToken(req.user),
    wins: req.user.wins,
    losses: req.user.losses,
    name: req.user.name,
    savedGame: req.user.savedGame,
    email: req.user.email,
  });
});

module.exports = router;
