/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const { config } = require('./config');
const { db } = require('./models');
const routes = require('./routes/v1');

// App instance
const app = express();

// Built-in express Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors Allow origin
const corsPolicy = cors();
app.use(corsPolicy);

// Import all routes
app.use('/', routes);

// DB Connect and App started
db.sync()
  .then(() => {
    app.listen(config.port, () => console.info(`App listening on port ${config.port}!`));
  })
  .catch((err) => {
    console.error('Failed to start the server: ', err);
  });
