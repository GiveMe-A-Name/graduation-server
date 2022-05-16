var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.end("hello world");
});

router.post("/", function (req, res) {
  console.log(req.body);
  res.end("post");
});

// router.post("/delete", async function (req, res, next) {
//   try {
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
