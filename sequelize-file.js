export default {
	development: {
		host: process.env.MYSQL_HOST,
		port: process.env.MYSQL_PORT,
		dialect: 'mysql',
		logging: true,
		database: process.env.MYSQL_DATABASE,
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
	},

	production: {
		host: process.env.MYSQL_HOST,
		port: process.env.MYSQL_PORT,
		dialect: 'mysql',
		logging: true,
		database: process.env.MYSQL_DATABASE,
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
	},

	testing: {
		host: process.env.MYSQL_HOST,
		port: process.env.MYSQL_PORT,
		dialect: 'mysql',
		logging: true,
		database: process.env.MYSQL_DATABASE,
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
	},
};
