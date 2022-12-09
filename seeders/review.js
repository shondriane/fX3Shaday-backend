'use strict'
const falso = require('@ngneat/falso')
const { User, Class,Review } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const user = await User.findAll({ raw: true })
    const classes = await Class.findAll({ raw: true })
    const reviews = user.map((u) => ({
      userId: u.id,
      classId:
        classes[Math.floor(Math.random() * classes.length)].id,
        rating:falso.randNumber({min:3,max:5}),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('reviews', reviews)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews')
  }
}