import dotenv from 'dotenv';
dotenv.config();

export default {
	development: {
		host: process.env.MYSQL_HOST,
		port: process.env.MYSQL_PORT,
		dialect: 'mysql',
		logging: true,
		// database: process.env.MYSQL_DATABASE,
	},

	production: {},
};
