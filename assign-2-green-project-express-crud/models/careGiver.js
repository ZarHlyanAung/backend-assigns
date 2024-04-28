const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

const CareGiver = sequelize.define('CareGiver', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[\d\s+()-]+$/i,
    },
  },
});

module.exports = CareGiver;

// ^[\d\s+()-]+$/i

// ^ - Start matching from the beginning of the input
// [\d\s+()-]+ - Match one or more occurrences of any digit, whitespace, plus, dash, parentheses or space
// $ - Stop matching at the end of the input
// i - Make the matching case-insensitive
