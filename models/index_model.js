const Sequelize = require("sequelize");
const config = require("../config/config.json");
const sequelize = new Sequelize(config.development);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("./task_model")(sequelize, Sequelize);
db.users = require("./user_model")(sequelize, Sequelize);
db.TokenBlacklist = require("./token_blacklist_model")(sequelize, Sequelize);

module.exports = db;
