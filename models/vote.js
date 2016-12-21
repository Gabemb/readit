'use strict';
module.exports = function(sequelize, DataTypes) {
  const Vote = sequelize.define('Vote', {
    total: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        isInt: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Vote.belongsTo(models.Post)
      }
    }
  });
  return Vote;
};