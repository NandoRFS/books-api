'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Donations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      publisher: {
        type: Sequelize.STRING,
        references: {
          model: 'People',
          key: 'id'
        },
      },
      interested: {
        type: Sequelize.STRING,
        references: {
          model: 'People',
          key: 'id'
        },
      },
      date: {
        type: Sequelize.DATE
      },
      locale: {
        type: Sequelize.STRING
      },
      book: {
        type: Sequelize.STRING,
        references: {
          model: 'Books',
          key: 'id'
        },
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
    return queryInterface.dropTable('Donations');
  }
};
