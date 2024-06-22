const Sequelize = require("sequelize");
const config = require("./config.js");
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    port: config.development.port,
    logging: false, // Set to true if you want to see SQL queries
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("./task_model")(sequelize, Sequelize);
db.users = require("./user_model")(sequelize, Sequelize);
db.TokenBlacklist = require("./token_blacklist_model")(sequelize, Sequelize);

module.exports = db;
