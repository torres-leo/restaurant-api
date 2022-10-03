import { Sequelize } from 'sequelize';
import dbconfig from '../../sequelize-file.js';

const config = dbconfig[process.env.NODE_ENV];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((error) => console.log(error));

sequelize.sync({ force: true }).then(() => {
	console.log('Creating Tables...');
});

export default sequelize;
