'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('People', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      id_user: {
        type: Sequelize.STRING,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false
      },
      age: {
        type: Sequelize.DATE
      },
      photo: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      id_address: {
        type: Sequelize.STRING,
          references: {
            model: 'Addresses',
            key: 'id'
          },
          allowNull: false
      },
      phone: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('People');
  }
};
