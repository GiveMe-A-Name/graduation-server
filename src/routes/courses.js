const express = require("express");
const { createSuccessResponse, createFailResponse } = require("../const");
const router = express.Router();
const Course = require("../db/course");

// 图片课程列表
router.get("/", async function (req, res, next) {
  try {
    const { type } = req.query;
    let data = {};
    if (type === "video") {
      const courses = await Course.findAll({
        where: {
          tag: type,
        },
      });
      data = courses.map((course) => {
        return {
          id: course.id,
          name: course.title,
          imgurl: course.image,
        };
      });
    } else if (type === "text") {
      const courses = await Course.findAll({
        where: {
          tag: type,
        },
      });
      data = courses.map((course) => {
        return {
          id: course.id,
          title: course.title,
          type: course.type,
          pushTime: course.createdAt,
          likeNum: course.like,
          browseNum: course.views,
          teacher: course.teacher,
        };
      });
    }
    res.json(createSuccessResponse(data));
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const course = await Course.findOne({
      where: {
        id,
      },
    });
    let data;
    if (course.type === "video") {
      data = {
        id: course.id,
        title: course.title,
        content: course.video,
      };
    } else if (course.type === "text") {
      data = {
        id: course.id,
        title: course.title,
        content: course.content,
        pushTime: course.createdAt,
      };
    }
    res.json(createSuccessResponse(data));
  } catch (e) {
    next(e);
  }
});

router.post("/like", async function (req, res, next) {
  try {
    const { id } = req.body;
    const course = await Course.findOne({
      where: {
        id,
      },
    });
    await Course.update(
      {
        like: course.like,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json(createSuccessResponse("success"));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
