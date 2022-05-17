const sequelize = require("./instance");
const { DataTypes, Model } = require("sequelize");

class Article extends Model {}

Article.init(
  {
    id: {
      type: DataTypes.INTEGER({
        decimals: 10,
      }),
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
    author: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: "Article", // 我们需要选择模型名称
    tableName: "article",
    timestamps: false,
  }
);

module.exports = Article;