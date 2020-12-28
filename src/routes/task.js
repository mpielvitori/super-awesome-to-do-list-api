/* eslint-disable import/named */
/* eslint-disable import/extensions */
import express from 'express';

import { getTasks, createTask } from '../controllers/task.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);

export default router;
