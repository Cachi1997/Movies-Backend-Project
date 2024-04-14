import { Sequelize } from 'sequelize'
import { config } from 'dotenv'
config()

export const mySequelize = new Sequelize(
  process.env.MY_DB_NAME,
  process.env.MY_DB_USERNAME,
  process.env.MY_DB_PASSWORD,
  {
    host: process.env.MY_DB_PORT,
    dialect: process.env.MY_DB_HOST
  }
)
