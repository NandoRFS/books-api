'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PersonBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_person: {
        type: Sequelize.STRING,
        references: {
          model: 'People',
          key: 'id'
        },
        allowNull: false
      },
      id_book: {
        type: Sequelize.STRING,
        references: {
          model: 'Books',
          key: 'id'
        },
        allowNull: false
      },
      state: {
        type: Sequelize.STRING
      },
      for_donation: {
        type: Sequelize.BOOLEAN
      },
      for_exchange: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('PersonBooks');
  }
};
