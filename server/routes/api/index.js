/* This code is creating a router object using the Express framework's Router function. It then sets up
routes for three different endpoints: "/wins", "/losses", and "/saveGame". Each endpoint is handled
by a separate module, which is required using the `require` function. Finally, the router object is
exported so that it can be used by other parts of the application. */
const router = require("express").Router();

router.use("/wins", require("./wins"));
router.use("/losses", require("./losses"));
router.use("/saveGame", require("./saveGame"));

module.exports = router;
