import { DataTypes } from 'sequelize';
import sequelize from '../database/db';
import { Product } from './Product';

const Cart = sequelize.define('Cart', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
});

// Cart.hasMany(Product, {
// 	foreignKey: 'productId',
// 	sourceKey: 'id',
// });

Cart.belongsToMany(Product, {
	through: 'productId',
});

Product.belongsToMany(Cart, {
	// foreignKey: 'productId',
	// targetKey: 'id',
	through: 'productId',
});

export { Cart };
