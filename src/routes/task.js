/* eslint-disable import/named */
/* eslint-disable import/extensions */
import express from 'express';

import {
  getTasks, createTask, getTaskById, deleteTaskById,
} from '../controllers/task.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.get('/:id', getTaskById);
router.delete('/:id', deleteTaskById);

export default router;
