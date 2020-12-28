/* eslint-disable import/extensions */
import Task from '../models/task.js';

export async function getTasks(req, res) {
  console.info('Get tasks');
  const tasks = await Task.find({}, {
    _id: 1,
    name: 1,
    createdAt: 1,
    expiresAt: 1,
  });
  res.send(tasks);
}

export async function createTask(req, res) {
  console.info('Create new task');
  const task = new Task(req.body);
  await task.save();

  res.send({
    // eslint-disable-next-line no-underscore-dangle
    id: task._id,
  });
}

