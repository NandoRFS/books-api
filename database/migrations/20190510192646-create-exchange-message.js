'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ExchangeMessages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_exchange: {
        type: Sequelize.STRING,
        references: {
          model: 'Exchanges',
          key: 'id'
        }
      },
      id_message: {
        type: Sequelize.STRING,
        references: {
          model: 'Messages',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ExchangeMessages');
  }
};
