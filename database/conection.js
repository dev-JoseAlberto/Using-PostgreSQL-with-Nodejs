const pgp = require('pg-promise')();
const db = pgp ({
  user: "postgres",
  password:"",
  host : "localhost",
  port:,
  database:"videos"
});

module.exports = db;