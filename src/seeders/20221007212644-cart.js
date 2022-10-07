'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'cart',
			[
				{
					id: '347ab6ff-aeb2-4f3f-8b4e-23ff49b95620',
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('carts', null, {});
	},
};
