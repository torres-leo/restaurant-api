import { DataTypes } from 'sequelize';

const Product = (sequelize) => {
	return sequelize.define(
		'product',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			category: {
				type: DataTypes.ENUM,
				values: ['CHICKEN', 'BURGER', 'ICE_CREAM', 'DRINKS', 'NOODLES'],
				allowNull: false,
			},
			discount: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
		},
		{ paranoid: true }
	);
};

export default Product;
