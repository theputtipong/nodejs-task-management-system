const express = require('express');
const db = require('./models/index_model');
const taskRoutes = require('./routes/task_routes');
const authRoutes = require('./routes/auth_routes');
const notificationRoutes = require('./routes/notification_routes');
const setupSwagger = require('./config/swagger');

const app = express();

app.use(express.json());

app.use('/tasks', taskRoutes);
app.use('/auth', authRoutes);
app.use('/notifications', notificationRoutes);

setupSwagger(app);

db.sequelize.sync().then(() => {
  console.log('Database synchronized');
});

module.exports = app;
