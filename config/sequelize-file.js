const config = {
	development: {
		database: process.env.MYSQL_DATABASE,
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		host: process.env.MYSQL_HOST,
		port: process.env.MYSQL_PORT,
		logging: true,
		dialect: 'mysql',
	},

	production: {
		database: process.env.MYSQL_DATABASE,
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		host: process.env.MYSQL_HOST,
		port: process.env.MYSQL_PORT,
		logging: true,
		dialect: 'mysql',
	},

	testing: {
		database: process.env.MYSQL_DATABASE,
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		host: process.env.MYSQL_HOST,
		port: process.env.MYSQL_PORT,
		logging: true,
		dialect: 'mysql',
	},
};

module.exports = config;
