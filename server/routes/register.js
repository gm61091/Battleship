const express = require("express");
const router = express.Router();
const db = require('../models'); 
const bcrypt = require('bcrypt'); 

router.post('/register', async (req, res) => {
    const { email, name, password } = req.body;
    try {
        const records = await db.User.findAll({where: {email}})
        if (records.length === 0) {
            const encryptedPassword = bcrypt.hashSync(password , 8)
            await db.User.create({ email, name, password: encryptedPassword })
            res.status(200).end()
        } else {
            res.status(204).end()
        }
    }
    catch (error) {
        console.log(error)
        res.status(423).end()
    }
})

module.exports = router;