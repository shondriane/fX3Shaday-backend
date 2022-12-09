'use strict'
const falso = require('@ngneat/falso')
const { User, Class } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const user = await User.findAll({ raw: true })
    const classes = await Class.findAll({ raw: true })
    const userClassList = user.map((u) => ({
      userId: u.id,
      classId:
        classes[Math.floor(Math.random() * classes.length)].id,
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('user_classes', userClassList)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_classes')
  }
}