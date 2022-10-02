export default {
	development: {
		host: process.env.MYSQL_HOST,
		port: process.env.MYSQL_PORT,
		dialect: 'mysql',
		logging: true,
	},

	production: {},
};
