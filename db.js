require("dotenv").config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const Sequelize = require ('sequelize');
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: 5432,
    dialect: 'postgres',
    native: true,
    ssl: true
} );

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully!.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = { sequelize };
