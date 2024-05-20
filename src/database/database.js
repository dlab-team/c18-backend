import 'dotenv/config';
import Sequelize from "sequelize";

let sequelize;
let db_name = process.env.PGDATABASE;
switch (process.env.NODE_ENV) {
  case 'production':
    sequelize = new Sequelize(process.env.PGSTRING);
    break;
  case 'test':
    db_name += '_test';
  case 'development':
    sequelize = new Sequelize(
      db_name,
      process.env.PGUSER,
      process.env.PGPASSWORD,
      {
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        dialect: "postgres",
      }
    );
    break;
  default:
    sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres');
  }

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error.message);
}

export { sequelize };
