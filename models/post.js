'use strict';
module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      validate: {
      len: [1, 50]
     }
   },
    body: {
      type: DataTypes.TEXT,
      validate: {
      len: [1, 2000]
      }
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Post.hasOne(models.Vote)
        Post.hasMany(models.Comment)
      }
    }
  });
  return Post;
};