/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from '@jest/globals';
import mongoose from 'mongoose';
import MongoDBMemory from 'mongodb-memory-server';
import * as taskController from '../../src/controllers/task.js';

describe('Task test', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = new MongoDBMemory.MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();
    await mongoose.connect(mongoUri, (err) => {
      if (err) console.error('Problem connecting DB', err);
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('get tasks', async () => {
    const send = jest.fn();
    const res = {
      send,
    };

    await taskController.getTasks({}, res);

    expect(send.mock.calls).toHaveLength(1);
    expect(send.mock.calls[0][0]).toHaveLength(0);
  });
});
