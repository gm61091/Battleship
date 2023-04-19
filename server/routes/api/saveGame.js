/* This is a module exporting a router object that handles a POST request to update a user's saved game
in a database. It uses the Express framework and Sequelize ORM to interact with the database. The
email parameter is used to identify the user to update, and the game data is taken from the request
body. If the update is successful, a 200 status code is returned. If there is an error, it is logged
to the console. */
const router = require("express").Router();
const db = require("../../models");

router.post("/:email", async (req, res) => {
  try {
    await db.User.update(
      {
        savedGame: req.body.game,
      },
      {
        where: { email: req.params.email },
      }
    );
    res.status(200).end();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
