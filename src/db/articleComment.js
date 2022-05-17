const sequelize = require("./instance");
const { DataTypes, Model } = require("sequelize");

class ArticleComment extends Model {}

ArticleComment.init(
  {
    id: {
      type: DataTypes.INTEGER({
        decimals: 10,
      }),
      primaryKey: true,
      autoIncrement: true,
    },
    article_id: {
      type: DataTypes.INTEGER({
        decimals: 10,
      }),
      allowNull: false,
    },
    user_account: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
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
    modelName: "ArticleComment", // 我们需要选择模型名称
    tableName: "article_comment",
    timestamps: false,
  }
);
module.exports = ArticleComment;
