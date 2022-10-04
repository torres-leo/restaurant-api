import { DataTypes } from 'sequelize';

const Cart_detail = (sequelize) => {
	sequelize.define('cart_detail', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
	});
};

export default Cart_detail;
