/* This code is creating a router object using the Express framework and defining routes for different
endpoints. */
const router = require("express").Router();

router.use("/api", require("./api"));
router.use(require("./login"));
router.use(require("./register"));
router.use(require("./protected"));

module.exports = router;
