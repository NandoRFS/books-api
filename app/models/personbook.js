'use strict';
module.exports = (sequelize, DataTypes) => {
  const PersonBook = sequelize.define('PersonBook', {
    id_person: DataTypes.STRING,
    id_book: DataTypes.STRING,
    state: DataTypes.STRING,
    for_donation: DataTypes.BOOLEAN,
    for_exchange: DataTypes.BOOLEAN
  }, {});
  PersonBook.associate = function(models) {
    // associations can be defined here
  };
  return PersonBook;
};