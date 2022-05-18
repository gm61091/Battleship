const router = require("express").Router();

router.use("/wins", require("./wins"));
router.use("/losses", require("./losses"))

module.exports = router;