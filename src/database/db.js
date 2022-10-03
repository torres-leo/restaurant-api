import { Sequelize } from 'sequelize';
import config from '../../sequelize-file.js';

export const sequelize = new Sequelize(process.env.MYSQL_DATABASE, 'root', 'root', config.development);
