'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PersonBookInterests', {
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
    return queryInterface.dropTable('PersonBookInterests');
  }
};
