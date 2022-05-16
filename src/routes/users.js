const express = require("express");
const {
  createSuccessResponse,
  createFailResponse,
  handleAnyErr,
} = require("../const");
const router = express.Router();
const User = require("../db/user");

router.post("/login", async function (req, res, next) {
  try {
    const { account, password } = req.body;
    const user = await User.findOne({
      where: {
        account,
      },
    });
    if (user?.password === password) {
      res.json(
        createSuccessResponse({
          account,
        })
      );
    } else {
      res.json(createFailResponse(-100, "用户密码错误或不存在用户"));
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
