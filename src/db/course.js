const sequelize = require("./instance");
const { DataTypes, Model } = require("sequelize");

class Course extends Model {}

Course.init(
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
    video: {
      type: DataTypes.STRING,
    },
    teacher: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    tag: {
      type: DataTypes.STRING,
    },
    like: {
      type: DataTypes.INTEGER,
    },
    views: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: "Course", // 我们需要选择模型名称
    tableName: "course",
    timestamps: false,
  }
);
module.exports = Course;
