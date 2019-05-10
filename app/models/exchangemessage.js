'use strict';
module.exports = (sequelize, DataTypes) => {
  const ExchangeMessage = sequelize.define('ExchangeMessage', {
    id_exchange: DataTypes.STRING,
    id_message: DataTypes.STRING
  }, {});
  ExchangeMessage.associate = function(models) {
    // associations can be defined here
  };
  return ExchangeMessage;
};