'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('products', {
			id: {
				type: Sequelize.DataTypes.UUID,
				defaultValue: Sequelize.DataTypes.UUIDV4,
				primaryKey: true,
			},
			name: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: Sequelize.DataTypes.FLOAT,
				allowNull: false,
			},
			image: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			category: {
				type: Sequelize.DataTypes.ENUM,
				values: ['CHICKEN', 'BURGER', 'ICE_CREAM', 'DRINKS', 'NOODLES', 'DEFAULT'],
				allowNull: false,
			},
			discount: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: true,
			},
			createdAt: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
				defaultValue: new Date(),
			},
			deletedAt: {
				type: Sequelize.DataTypes.DATE,
				allowNull: true,
			},
			updatedAt: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
				defaultValue: new Date(),
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('products');
	},
};
