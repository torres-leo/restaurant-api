import { DataTypes } from 'sequelize';

const Cart = (sequelize) => {
	return sequelize.define(
		'cart',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
		},
		{ paranoid: true }
	);
};

export default Cart;
