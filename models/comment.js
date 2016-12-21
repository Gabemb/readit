'use strict';
module.exports = function(sequelize, DataTypes) {
  const Comment = sequelize.define('Comment', {
    body: {
      type: DataTypes.STRING,
      validate: {
      len: [1, 300]
     }
    }
  }, {
    classMethods: {
      associate: function(models) {
         Comment.belongsTo(models.Post)
      }
    }
  });
  return Comment;
};