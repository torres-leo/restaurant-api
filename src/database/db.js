import { Sequelize } from 'sequelize';
import dbconfig from '../../sequelize-file';
import Cart from '../models/Cart';
import Product from '../models/Product';
import Cart_detail from '../models/Cart_detail';

const config = dbconfig[process.env.NODE_ENV];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize
	.authenticate()
	.then(() => {
		console.log('connected..');
	})
	.catch((error) => console.log(error));

const db = {};

Cart.belongsToMany(Product, {
	through: Cart_detail,
});

Product.belongsToMany(Cart, {
	through: Cart_detail,
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.cart = Cart(sequelize);
db.product = Product(sequelize);
db.cart_detail = Cart_detail(sequelize);

db.sequelize.sync({ force: true }).then(() => {
	console.log('Created Tables..');
});

export default db;
