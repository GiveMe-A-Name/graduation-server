const sequelize = require("./instance");
const { DataTypes, Model } = require("sequelize");

class Teacher extends Model {}

Teacher.init(
  {
    id: {
      type: DataTypes.INTEGER({
        decimals: 10,
      }),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
    record: {
      type: DataTypes.TEXT,
    },
    pushCourse: {
      type: DataTypes.STRING,
    },
    work: {
      type: DataTypes.STRING,
    },
    honor: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: "Teacher", // 我们需要选择模型名称
    tableName: "teacher",
    timestamps: false,
  }
);
module.exports = Teacher;
