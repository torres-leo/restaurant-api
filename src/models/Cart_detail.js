import { DataTypes } from 'sequelize';

const Cart_detail = (sequelize) => {
	return sequelize.define(
		'cart_detail',
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

export default Cart_detail;
