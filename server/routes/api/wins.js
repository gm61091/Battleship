/* This is a JavaScript code that defines a router for updating a user's wins in a database. */
const express = require("express");
const router = express.Router();
const db = require("../../models");

router.put("/:email/:updatedWins", async (req, res) => {
  try {
    await db.User.update(
      {
        wins: req.params.updatedWins,
      },
      {
        where: {
          email: req.params.email,
        },
      }
    );
    res.status(200).end();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
