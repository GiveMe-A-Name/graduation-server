var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.end("hello world");
});

router.post("/", function (req, res) {
  console.log(req.body);
  res.end("post");
});

module.exports = router;
