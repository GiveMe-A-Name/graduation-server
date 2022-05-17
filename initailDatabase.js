const sequelize = require("./src/db/instance");
const User = require("./src/db/user");
const Course = require("./src/db/course");
const News = require("./src/db/news");
const Teacher = require("./src/db/teacher");
const Article = require('./src/db/article')
const ArticleComment = require('./src/db/articleComment')

async function try_connet() {
  try {
    await sequelize.authenticate();
    console.log("MySQL Connection has been established successfully.");

    // await User.sync({ force: true });
    // console.log("用户模型表刚刚(重新)创建！");

    // await Course.sync({ force: true });
    // console.log("课程模型表刚刚(重新)创建！");

    // await News.sync({ force: true });
    // console.log("行为模型表刚刚(重新)创建！");

    // await Teacher.sync({ force: true });
    // console.log("教师模型表刚刚(重新)创建！");

    await Article.sync({ force: true });
    console.log("文章模型表刚刚(重新)创建！");

    await ArticleComment.sync({ force: true });
    console.log("文章评论模型表刚刚(重新)创建！");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

try_connet();
