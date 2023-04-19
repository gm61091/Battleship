/* This is a code snippet for a Node.js server using the Express framework. It defines a router that
handles a POST request to register a new user. The router checks if the email already exists in the
database, and if not, it encrypts the password using bcrypt and creates a new user record in the
database. The response status code is set to 200 if the user is created successfully, and 204 if the
email already exists. If there is an error, the response status code is set to 423 and the error is
logged to the console. Finally, the router is exported for use in other parts of the application. */
const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const records = await db.User.findAll({ where: { email } });
    if (records.length === 0) {
      const encryptedPassword = bcrypt.hashSync(password, 8);
      await db.User.create({ email, name, password: encryptedPassword });
      res.status(200).end();
    } else {
      res.status(204).end();
    }
  } catch (error) {
    console.log(error);
    res.status(423).end();
  }
});

module.exports = router;
