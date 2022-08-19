const router = require("express").Router();
const albumRouter = require("./album");

router.use("/albums", albumRouter);

module.exports = router;
