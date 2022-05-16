const sequelize = require("./instance");
const { DataTypes, Model } = require("sequelize");

class News extends Model {}

News.init(
  {
    id: {
      type: DataTypes.INTEGER({
        decimals: 10,
      }),
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    origin: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
    author: {
      type: DataTypes.STRING,
    },
    hitCount: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
    type: {
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
    modelName: "News", // 我们需要选择模型名称
    tableName: "news",
    timestamps: false,
  }
);
module.exports = News;
