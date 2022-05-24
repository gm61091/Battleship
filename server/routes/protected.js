const express = require("express");
const router = express.Router();
const passport = require('passport');

router.use(passport.initialize())

require('../auth/passAuth')

let requireJwt = passport.authenticate('jwt', {session: false})

router.get('/protected', requireJwt, (req, res) =>{
    res.json({
        isValid: true,
        wins: req.user.wins,
        losses: req.user.losses,
        name: req.user.name,
        email: req.user.email,
        savedGame: req.user.savedGame
    })
})

module.exports = router;