const express = require("express");
const { createSuccessResponse, createFailResponse } = require("../const");
const router = express.Router();
const Article = require("../db/article");
const ArticleComment = require("../db/articleComment");

router.get("/", async function (req, res, next) {
  try {
    const articles = await Article.findAll();
    const data = articles.map((article) => {
      return {
        id: article.id,
        title: article.title,
        pushTime: article.createdAt,
        author: article.author,
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
    const article = await Article.findOne({
      where: {
        id,
      },
    });
    const data = {
      title: article.title,
      content: article.content,
      pushTime: article.createdAt,
      author: article.author,
    };
    res.json(createSuccessResponse(data));
  } catch (e) {
    next(e);
  }
});

router.post("/create", async function (req, res, next) {
  try {
    const { title, content, author } = req.body;
    await Article.create({
      title,
      content,
      author,
    });
    res.json(createSuccessResponse("success"));
  } catch (e) {
    next(e);
  }
});

router.post("/delete", async function (req, res, next) {
  try {
    const { id } = req.body;
    await Article.destroy({
      where: {
        id,
      },
    });
    res.json(createSuccessResponse("success"));
  } catch (e) {
    next(e);
  }
});

router.get("/:id/comments", async function (req, res, next) {
  try {
    const { id } = req.params;
    const comments = await ArticleComment.findAll({
      where: {
        article_id: id,
      },
    });
    const data = comments.map((comment) => {
      return {
        id: comment.id,
        userName: comment.user_account,
        content: comment.content,
        pushTime: comment.createdAt,
      };
    });
    res.json(createSuccessResponse(data));
  } catch (e) {
    next(e);
  }
});

router.post("/comments/create", async function (req, res, next) {
  try {
    const { articleId, userAccount, content } = req.body;
    const comment = await ArticleComment.create({
      article_id: articleId,
      user_account: userAccount,
      content,
    });
    const data = {
      id: comment.id,
      userName: comment.user_account,
      content: comment.content,
      pushTime: comment.createdAt,
    };
    res.json(createSuccessResponse(data));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
