import { Sequelize } from 'sequelize';
import logging from './logging';
import { mysql, DEVELOPMENT } from './config';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: mysql.MYSQL_HOSTNAME,
  port: parseInt(mysql.MYSQL_PORT),
  username: mysql.MYSQL_USER,
  password: mysql.MYSQL_PASSWORD,
  database: mysql.MYSQL_DATABASE,
  logging: DEVELOPMENT ? (msg) => logging.log(msg) : false,
});

export default sequelize;