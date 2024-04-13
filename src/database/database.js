import { Sequelize } from 'sequelize'
import { config } from 'dotenv';
config();

export const mySequelize = new Sequelize(
  process.env.MY_DB_NAME,
  process.env.MY_DB_USERNAME,
  process.env.MY_DB_PASSWORD,
  {
    host: process.env.MY_DB_PORT,
    dialect: process.env.MY_DB_HOST
  }
);

// export const mySequelize = new Sequelize('moviesdb', 'postgres', 'sanlorenzo', {
//   host: 'localhost',
//   dialect: 'postgres'
// })

// export const mySequelize = new Sequelize(MY_DB_NAME, MY_DB_USERNAME, MY_DB_PASSWORD, {
//   host: MY_DB_PORT,
//   dialect: MY_DB_HOST
// })