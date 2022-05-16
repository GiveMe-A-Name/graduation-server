const express = require("express");
const { createSuccessResponse, createFailResponse } = require("../const");
const router = express.Router();
const Teacher = require("../db/teacher");

router.get("/", async function (req, res, next) {
  try {
    const teachers = await Teacher.findAll();
    const data = teachers.map((teacher) => {
      return {
        id: teacher.id,
        name: teacher.name,
        imgurl: teacher.photo,
      };
    });
    res.json(createSuccessResponse(data));
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findOne({
      where: {
        id,
      },
    });
    const data = {
      id: teacher.id,
      name: teacher.name,
      type: teacher.type,
      msg: teacher.msg,
      work: teacher.work,
      honor: teacher.honor,
      pushcourse: teacher.pushCourse,
    };
    res.json(createSuccessResponse(data));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
