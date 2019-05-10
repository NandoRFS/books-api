'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    edition: DataTypes.STRING,
    year: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};