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
    if (course.tag === "video") {
      data = {
        id: course.id,
        title: course.title,
        video: course.video,
      };
    } else if (course.tag === "text") {
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

router.get("/admin/all", async function (req, res, next) {
  try {
    const courses = await Course.findAll();
    const data = courses.map((course) => {
      return {
        id: course.id,
        title: course.title,
        type: course.type,
        pushTime: course.createdAt,
        teacher: course.teacher,
        tag: course.tag,
      };
    });
    res.json(createSuccessResponse(data));
  } catch (e) {
    next(e);
  }
});

router.get("/admin/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const course = await Course.findOne({
      where: { id },
    });
    const data = {
      id: course.id,
      title: course.title,
      type: course.type,
      teacher: course.teacher,
      tag: course.tag,
      content: course.content,
    };

    res.json(createSuccessResponse(data));
  } catch (e) {
    next(e);
  }
});

router.post("/create", async function (req, res, next) {
  try {
    const { title, teacher, content, type, tag } = req.body;
    let video = tag === "video" ? "xxx" : undefined;
    await Course.create({
      title,
      teacher,
      content,
      type,
      tag,
      video,
    });
    res.json(createSuccessResponse("success"));
  } catch (e) {
    next(e);
  }
});

router.post("/delete", async function (req, res, next) {
  try {
    const { id } = req.body;
    await Course.destroy({
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
    const { title, teacher, content, type, tag, id } = req.body;
    console.log("update course", res.body);
    await Course.update(
      {
        title,
        teacher,
        content,
        type,
        tag,
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
