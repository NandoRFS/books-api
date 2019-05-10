'use strict';
module.exports = (sequelize, DataTypes) => {
  const PersonBookInterest = sequelize.define('PersonBookInterest', {
    id_person: DataTypes.STRING,
    id_book: DataTypes.STRING
  }, {});
  PersonBookInterest.associate = function(models) {
    // associations can be defined here
  };
  return PersonBookInterest;
};