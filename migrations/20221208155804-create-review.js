'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      comment: {
        type: Sequelize.TEXT
      },
      classId: {
        type: Sequelize.INTEGER,
       
      },
      userId: {
        type: Sequelize.INTEGER,
        OnDelete:'CASCADE',
        references:{
          model:'users',
          key:'id'
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reviews');
  }
};