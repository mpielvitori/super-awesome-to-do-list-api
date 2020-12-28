/* eslint-disable import/extensions */
import express from 'express';
import bodyParser from 'body-parser';
import config from 'config';
import mongoose from 'mongoose';
import task from './routes/task.js';

const app = express();

// Set up mongoose connection
console.info('DB: ', config.dbUri);
mongoose.connect(
  config.dbUri,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
).then(() => console.info('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error ', err));
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/task', task);

const port = 3000;

app.listen(port, () => {
  console.info(`Server is up and running on port numner ${port}`);
});

export default app;
