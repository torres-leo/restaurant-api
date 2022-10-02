import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, , 'root', {
  host: '',
  port:'',
dialect: "mysql",
logging: true,
});
