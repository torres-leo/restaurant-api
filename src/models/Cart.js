import { DataTypes } from 'sequelize';

const Cart = (sequelize) => {
	sequelize.define('cart', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
	});
};

export default Cart;
