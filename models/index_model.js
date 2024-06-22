const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  dialect: process.env.POSTGRES_DIALECT,
  port: process.env.POSTGRES_PORT,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("./task_model")(sequelize, Sequelize);
db.users = require("./user_model")(sequelize, Sequelize);
db.TokenBlacklist = require("./token_blacklist_model")(sequelize, Sequelize);

module.exports = db;
