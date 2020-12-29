/* eslint-disable import/extensions */
import Task from '../models/task.js';

export async function getTasks(req, res) {
  console.info('Get tasks');
  try {
    const tasks = await Task.find({}, {
      _id: 1,
      name: 1,
      createdAt: 1,
      expiresAt: 1,
    });
    res.send(tasks);
  } catch (error) {
    console.error('Error trying to get tasks', error);
    res.status(500).send({
      message: 'Error trying to get tasks',
    });
  }
}

export async function createTask(req, res) {
  console.info('Create new task');
  try {
    const task = new Task(req.body);
    await task.save();

    res.status(201).send({
    // eslint-disable-next-line no-underscore-dangle
      id: task._id,
    });
  } catch (error) {
    console.error('Error trying to create task', error);
    res.status(500).send({
      message: 'Error trying to create task',
    });
  }
}

export async function getTaskById(req, res) {
  console.info(`Get task ${req.params.id}`);
  try {
    const task = await Task.findById(req.params.id, {
      _id: 1,
      name: 1,
      description: 1,
      createdAt: 1,
      expiresAt: 1,
      repeat: 1,
      reminder: 1,
    });
    if (!task) {
      res.status(404).send({ message: 'Task not found' });
    } else {
      res.send(task);
    }
  } catch (error) {
    console.error('Error trying to get task by id', error);
    res.status(500).send({ message: 'Error trying to get task by id' });
  }
}

export async function deleteTaskById(req, res) {
  console.info(`Delete task ${req.params.id}`);
  try {
    const query = await Task.findByIdAndDelete(req.params.id);
    if (!query) {
      res.status(404).send({ message: 'Task not found' });
    } else {
      res.send({ message: 'Task deleted successfully' });
    }
  } catch (error) {
    console.error('Error trying to delete task by id', error);
    res.status(500).send({ message: 'Error trying to delete task by id' });
  }
}
