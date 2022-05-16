const sequelize = require("./instance");
const { DataTypes, Model } = require("sequelize");

class User extends Model {}

User.init(
  {
    account: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: "User", // 我们需要选择模型名称
    tableName: "user",
    timestamps: false,
  }
);
module.exports = User;
