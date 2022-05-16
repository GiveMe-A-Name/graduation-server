const express = require("express");
const { createSuccessResponse, createFailResponse } = require("../const");
const router = express.Router();
const News = require("../db/news");

router.get("/", async function (_req, res, next) {
  try {
    const news = await News.findAll();
    const data = news.map((item) => {
      return {
        id: item.id,
        type: item.type,
        title: item.title,
        publishtime: item.createdAt,
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
    const news = await News.findOne({
      where: {
        id,
      },
    });
    const data = {
      id: news.id,
      title: news.title,
      origin: news.origin,
      author: news.author,
      publishtime: news.createdAt,
      hitcount: news.hitCount,
      content: news.content,
    };
    res.json(createSuccessResponse(data));
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/create", async function (req, res, next) {
  try {
    const { title, content, origin, type } = req.body;
    await News.create({
      title,
      content,
      origin,
      type,
    });
    res.json(createSuccessResponse("success"));
  } catch (e) {
    next(e);
  }
});

router.post("/delete", async function (req, res, next) {
  try {
    const { id } = req.body;
    const row = await News.destroy({
      where: {
        id,
      },
    });
    if (row > 0) {
      res.json(createSuccessResponse("success"));
    } else {
      res.json(createFailResponse(-101, "删除新闻失败"));
    }
  } catch (e) {
    next(e);
  }
});

router.post("/addviews", async function (req, res, next) {
  try {
    const { id } = req.body;
    const news = await News.findOne({
      where: {
        id,
      },
    });
    await News.update(
      {
        hitCount: news.hitCount + 1,
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
