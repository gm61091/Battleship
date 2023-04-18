const router = require("express").Router();

router.use("/api", require("./api"));
router.use(require("./login"));
router.use(require("./register"));
router.use(require("./protected"));

module.exports = router;
