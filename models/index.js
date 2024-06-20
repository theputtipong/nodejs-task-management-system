const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(config.development);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require('./task')(sequelize, Sequelize);
db.users = require('./user')(sequelize, Sequelize);

module.exports = db;
