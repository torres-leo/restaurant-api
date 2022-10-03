import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db';

const Product = sequelize.define('Product', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
	},
	price: {
		type: DataTypes.FLOAT,
	},
	image: {
		type: DataTypes.STRING,
	},
	description: {
		type: DataTypes.STRING,
	},
	category: {
		type: DataTypes.ENUM,
		values: ['CHICKEN', 'BURGER', 'ICE_CREAM', 'DRINKS', 'NOODLES', 'DEFAULT'],
	},
});

export { Product };
