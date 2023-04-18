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
