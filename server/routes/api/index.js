const router = require("express").Router();

router.use("/losses", require("./losses"))

module.exports = router;