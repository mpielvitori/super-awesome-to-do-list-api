/* eslint-disable import/named */
/* eslint-disable import/extensions */
import express from 'express';

import {
  getTasks, createTask,
  getTaskById, deleteTaskById,
  searchTasks,
} from '../controllers/task.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.get('/search/:query?', searchTasks);
router.get('/:id', getTaskById);
router.delete('/:id', deleteTaskById);

export default router;
