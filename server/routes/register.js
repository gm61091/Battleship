const express = require("express");
const router = express.Router();
const db = require('../models'); //access to all db models
const bcrypt = require('bcrypt'); //used to encrypt passwords

router.post('/register', async (req, res)=>{

    // collect info from header 
    //email, password 

    let {email, name, password} = req.body;

    
    //*determine if email already exists in our db
    try{

        //if anything is returned from this query, it means that the user's email already exits
        //in out database
        let records = await db.User.findAll({where: {email}})
        
        if(records.length === 0){ //no record exits, must create new user record

            // encrypt our password
            
            password = bcrypt.hashSync(password , 8)

            //create db entry 

            let newUserRecord = await db.User.create({email, name, password})
             //user is an object that we just created
             res.status(200).end()
            //user => {id, email, password, createdAt, updatedAt
        }
        else{
            return res.status(422).json({
                error: "Email already exists."
            })

        }}
        catch (err){
            return res.status(423).json({
                error: "Can't access database."
            })

        }})

        module.exports = router;