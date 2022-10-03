import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db';
import { Product } from './Product';

const Cart = sequelize.define('Cart', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
});

Cart.hasMany(Product, {
	foreignKey: 'productId',
	sourceKey: 'id',
});

Product.belongsTo(Cart, {
	foreignKey: 'productId',
	targetId: 'id',
});

export { Cart };
