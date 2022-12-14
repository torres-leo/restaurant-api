import { Sequelize } from 'sequelize';
import dbConfig from '../../config/sequelize-file';
import Cart from '../models/Cart';
import Product from '../models/Product';
import Cart_detail from '../models/Cart_detail';

const config = dbConfig[process.env.NODE_ENV];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize
	.authenticate()
	.then(() => {
		console.log('connected..');
	})
	.catch((error) => console.log(error));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.cart = Cart(sequelize);
db.product = Product(sequelize);
db.cart_detail = Cart_detail(sequelize);

db.cart.belongsToMany(db.product, {
	through: db.cart_detail,
});

db.product.belongsToMany(db.cart, {
	through: db.cart_detail,
});

export default db;
