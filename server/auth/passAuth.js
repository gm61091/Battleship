const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");
const db = require("../models");
const secretObj = require("../secrets");

const localLogin = new LocalStrategy(
  { usernameField: "email" },
  async (email, password, done) => {
    try {
      const record = await db.User.findAll({ where: { email } });
      if (record.length) {
        bcrypt.compare(password, record[0].password, (error, match) => {
          if (error) return done(error);
          if (!match) return done(null, false);
          return done(null, record[0]);
        });
      } else return done(null, false);
    } catch (error) {
      console.log(error.message);
      return done(error);
    }
  }
);

passport.use(localLogin);

/**
 * JWT Strategy
 * * check to see if token is valid
 */

let jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: secretObj.secret,
};

let jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    //check if user is in db

    let userID = payload.sub;

    let user = await db.User.findByPk(userID); //{}

    //true - success

    if (user) {
      return done(null, user); //place the user object on req.user

      //req.user = {id, email, password}
    } else {
      //else - error
      return done(null, false);
    }
  } catch (error) {
    //error reading db

    return done(error);
  }
});

passport.use(jwtLogin);
