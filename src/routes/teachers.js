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
        type: teacher.type,
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
      record: teacher.record,
      pushcourse: teacher.pushCourse,
    };
    res.json(createSuccessResponse(data));
  } catch (e) {
    next(e);
  }
});

router.post("/create", async function (req, res, next) {
  try {
    const { name, type, record, course, work, honor } = req.body;
    const photo = "";
    await Teacher.create({
      name,
      type,
      work,
      honor,
      record,
      pushCourse: course,
      photo,
    });
    res.json(createSuccessResponse("success"));
  } catch (e) {
    next(e);
  }
});

router.post("/delete", async function (req, res, next) {
  try {
    const { id } = req.body;
    await Teacher.destroy({
      where: {
        id,
      },
    });
    res.json(createSuccessResponse("success"));
  } catch (e) {
    next(e);
  }
});

router.post("/update", async function (req, res, next) {
  try {
    const { name, type, record, course, work, honor, id } = req.body;
    await Teacher.update(
      {
        name,
        type,
        work,
        honor,
        record,
        pushCourse: course,
      },
      {
        id,
      }
    );
    res.json(createSuccessResponse("success"));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
