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
