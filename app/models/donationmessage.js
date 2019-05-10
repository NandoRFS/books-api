'use strict';
module.exports = (sequelize, DataTypes) => {
  const DonationMessage = sequelize.define('DonationMessage', {
    id_donation: DataTypes.STRING,
    id_message: DataTypes.STRING
  }, {});
  DonationMessage.associate = function(models) {
    // associations can be defined here
  };
  return DonationMessage;
};