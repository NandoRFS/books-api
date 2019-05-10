'use strict';
module.exports = (sequelize, DataTypes) => {
  const Donation = sequelize.define('Donation', {
    publisher: DataTypes.STRING,
    interested: DataTypes.STRING,
    date: DataTypes.DATE,
    locale: DataTypes.STRING,
    book: DataTypes.STRING
  }, {});
  Donation.associate = function(models) {
    // associations can be defined here
  };
  return Donation;
};