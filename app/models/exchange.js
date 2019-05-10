'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exchange = sequelize.define('Exchange', {
    publisher: DataTypes.STRING,
    interested: DataTypes.STRING,
    date: DataTypes.DATE,
    locale: DataTypes.STRING,
    book_publisher: DataTypes.STRING,
    book_interested: DataTypes.STRING
  }, {});
  Exchange.associate = function(models) {
    // associations can be defined here
  };
  return Exchange;
};