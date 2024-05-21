require('dotenv').config()

module.exports = {
  development: {
    username: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || 'postgres' ,
    database: process.env.PGDATABASE || 'postgres',
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || '5432',
    dialect: 'postgres',
    migrationStorageTableName: 'migrations'
  },
  test: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE + '_test',
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres',
    migrationStorageTableName: 'migrations'
  },
  production: {
    url: process.env.PGSTRING,
    dialect: 'postgres',
    migrationStorageTableName: 'migrations'
  }
};