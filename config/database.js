const { Sequelize } = require('sequelize');

module.exports = new Sequelize('codegig', 'alen', '', {
  host: 'localhost',
  dialect: 'postgres',
});
