'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const classes = [
			{
				class: 'Private Training',
        description: 'Fitness is personal. Whether you are a newcomer or competitve athlete, I can help you achieve your fitness goals.',
				picture: 'https://asphaltgreen.org/images/uploads/landscapes/_tall_medium/_DSC4975_940x526.jpg',
       
        cost: 75,

				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				class: 'Kickboxing',
        description: 'Good for fitness, self-defense and weight loss',
				picture: 'https://previews.123rf.com/images/luckybusiness/luckybusiness1109/luckybusiness110900433/10687069-large-group-of-young-people-training-kickboxing-outdoor.jpg',
      
        capacity:15,
        cost:25,
				createdAt: new Date(),
				updatedAt: new Date()
			},
	
		
		
		];
		await queryInterface.bulkInsert('classes', classes);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('classes');
	}
};