const express = require('express');
const { authenticateToken, authorizeRole } = require('../middlewares/authMiddleware');
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.post('/', authenticateToken, authorizeRole('admin'), createTask);
router.get('/', authenticateToken, getAllTasks);
router.get('/:id', authenticateToken, getTaskById);
router.put('/:id', authenticateToken, authorizeRole('admin'), updateTask);
router.delete('/:id', authenticateToken, authorizeRole('admin'), deleteTask);

module.exports = router;
