'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    name: DataTypes.STRING,
    id_user: DataTypes.STRING,
    age: DataTypes.DATE,
    photo: DataTypes.STRING,
    about: DataTypes.STRING,
    id_address: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
  };
  return Person;
};