'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    cep: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    city: DataTypes.STRING,
    uf: DataTypes.STRING,
    obs: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};