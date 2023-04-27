/* This code is setting up authentication strategies for a Node.js application using the Passport.js
library. It is importing necessary modules such as `passport`, `LocalStrategy`, `JwtStrategy`,
`ExtractJwt`, `bcrypt`, and database models. */
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

let jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: secretObj.secret,
};

let jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    let userID = payload.sub;

    let user = await db.User.findByPk(userID); //{}

    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error);
  }
});

passport.use(jwtLogin);
