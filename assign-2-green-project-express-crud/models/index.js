const { Sequelize } = require('sequelize');
const Plant = require('./plant');
const CareGiver = require('./careGiver');

const sequelize = new Sequelize('green_project', 'dyno', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Initialize models
Plant(sequelize);
CareGiver(sequelize);

// Establishing relationships
Plant.belongsTo(CareGiver, { foreignKey: 'careGiverId' }); // one to many
CareGiver.hasMany(Plant, { foreignKey: 'careGiverId' });

module.exports = { sequelize, Plant, CareGiver };
