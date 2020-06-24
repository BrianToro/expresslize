const db = require('../config/db');

const models = {
  Message: db.import('./message.model'),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = { models, db };
