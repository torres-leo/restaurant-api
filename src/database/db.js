import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('', 'root', 'root', {
	host: '',
	port: '',
	dialect: 'mysql',
	logging: true,
});
