const Sequelize = require('sequelize');
const { config } = require('.');

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: config.dialect,
  },
);

module.exports = sequelize;
