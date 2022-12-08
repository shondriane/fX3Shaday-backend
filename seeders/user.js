'use strict';
const falso = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const users = [...Array(20)].map(() => ({
			firstName: falso.randFirstName(),
			lastName: falso.randLastName(),
			passwordDigest: falso.randPassword(),
			email: falso.randEmail(),
			phoneNumber: falso.randPhoneNumber(),
			createdAt: falso.randPastDate(),
			updatedAt: falso.randRecentDate()
		}));
		await queryInterface.bulkInsert('users', users);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('users',null,{});
	}
};

