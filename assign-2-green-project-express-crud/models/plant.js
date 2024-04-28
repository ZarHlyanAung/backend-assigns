const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

const Plant = sequelize.define('Plant', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: DataTypes.INTEGER,
  careGiverId: {
    // Explicit foreign key
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'CareGivers', // 'CareGivers' is the table name
      key: 'id',
    },
  },
});

module.exports = Plant;
