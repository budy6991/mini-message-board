var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("This is where you are supposed to input the message");
});

module.exports = router;
