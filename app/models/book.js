'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    issn: DataTypes.STRING,
    id_author: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.Author, 
      {foreignKey: 'id_author'}
    )
  };
  return Book;
};