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

async function try_connet() {
  try {
    await sequelize.authenticate();
    console.log("MySQL Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

try_connet();
