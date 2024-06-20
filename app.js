const express = require('express');
const db = require('./models');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();

app.use(express.json());

app.use('/tasks', taskRoutes);
app.use('/auth', authRoutes);
app.use('/notifications', notificationRoutes);

db.sequelize.sync().then(() => {
  console.log('Database synchronized');
});

module.exports = app;
