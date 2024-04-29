const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Plant', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    species: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER },
    careGiverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'CareGivers', key: 'id' },
    },
  });
};
