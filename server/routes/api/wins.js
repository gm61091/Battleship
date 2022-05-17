//update the score for the win 
const express = require("express");
const router = express.Router();
const db = require('../../models');



router.put('/:email/:updatedWins', async (req, res) => {
//updating score

//need email and new wins number to update.
try{

await db.User.update(
    //wins/email are the colums on our table we are putting the data into

    //the last variable (in this case updatedWins and email) are what we are sending to update

    {wins: 
    req.params.updatedWins}, 
    {where: 
        {email: 
            req.params.email}
    })

    res.status(200).end()
  }
  catch{
    console.log('error in the catch');
  }

  

})


module.exports = router