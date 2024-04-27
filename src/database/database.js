import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  process.env.PGDATABASE || "postgres",
  process.env.PGUSER || "postgres",
  process.env.PGPASSWORD || "1234",
  {
    host: process.env.PGHOST || "localhost",
    dialect: "postgres",
  }
);
