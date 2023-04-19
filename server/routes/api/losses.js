/* This is a module exporting a router object that handles a PUT request to update the "losses" field
of a user in a database. The router is created using the Express framework and the database model is
imported from a file located in the "../../models" directory. The router handles a PUT request with
two parameters in the URL: "email" and "updatedLosses". The "updatedLosses" parameter is used to
update the "losses" field of the user with the corresponding email in the database. If the update is
successful, the response status is set to 200 and the response is ended. If there is an error, it is
logged to the console. */
const express = require("express");
const router = express.Router();
const db = require("../../models");

router.put("/:email/:updatedLosses", async (req, res) => {
  try {
    await db.User.update(
      {
        losses: req.params.updatedLosses,
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
