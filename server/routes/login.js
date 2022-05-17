const router = require("express").Router();
const jwt = require("jwt-simple");
const secretObj = require("../secrets");
const passport = require("passport");

router.use(passport.initialize());

require("../auth/passAuth");

const requireLogin = passport.authenticate("local", { session: false });

const generateToken = userRecord => {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: userRecord.id, iat: timestamp }, secretObj.secret)
}

router.post("/login", requireLogin, (req, res) => {
    res.json({
        token: generateToken(req.user),
        wins: req.user.wins,
        losses: req.user.losses,
        name: req.user.name
    })
})

module.exports = router;