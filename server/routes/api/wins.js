const express = require("express");
const router = express.Router();
const db = require('../../models');

router.put('/:email/:updatedWins', async (req, res) => {
  try{
    await db.User.update({
      wins: req.params.updatedWins
    }, {
      where: {
        email: req.params.email
      }
    })
    res.status(200).end()
  }
  catch{
    console.log('error in the catch');
  }
})

module.exports = router