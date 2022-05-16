const Sequelize = require("sequelize");

const db_config = {
  username: "test01",
  password: "abc123456",
  database: "my_db",
};

const sequelize = new Sequelize(
  db_config.database,
  db_config.username,
  db_config.password,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
