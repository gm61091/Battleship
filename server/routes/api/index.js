const router = require("express").Router();

router.use("/wins", require("./wins"));
router.use("/losses", require("./losses"));
router.use("/saveGame", require("./saveGame"));

module.exports = router;
