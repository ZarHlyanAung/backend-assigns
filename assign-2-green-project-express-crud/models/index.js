const { Sequelize } = require('sequelize');
const initPlant = require('./plant');
const initCareGiver = require('./careGiver');

const sequelize = new Sequelize('green_project', 'dyno', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Initialize models
const Plant = initPlant(sequelize);
const CareGiver = initCareGiver(sequelize);

// Establishing relationships
Plant.belongsTo(CareGiver, { foreignKey: 'careGiverId' }); // Plant is the many in one-to-many relationship
CareGiver.hasMany(Plant, { foreignKey: 'careGiverId' }); // CareGiver is the one in one-to-many relationship

module.exports = { sequelize, Plant, CareGiver };
