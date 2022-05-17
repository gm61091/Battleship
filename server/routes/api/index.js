const router = require("express").Router();


router.use("/wins", require("./wins"));


module.exports = router;