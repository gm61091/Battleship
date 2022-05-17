//update the score for the losses
const express = require("express");
const router = express.Router();
const db = require('../../models');


router.put('/:email/:updatedLosses', async (req, res) => {
//updating score

//need email and new losses number to update.
try{




await db.User.update(
    //losses/email are the colums on our table we are putting the data into
    
    //the last variable (in this case updated and email) are what we are sending to update

    {losses: 
    req.params.updatedLosses}, 
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


module.exports=router