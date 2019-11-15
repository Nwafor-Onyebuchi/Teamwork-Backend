const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "kzrmtrkx",
  host: "salt.db.elephantsql.com",
  database: "kzrmtrkx",
  password: "3zA6HPrCHzgziM9i78wXTCacmLpYTThG",
  port: 5432
});
pool.query("SELECT * FROM users", (err, res) => {
  console.log(err, res);
  //pool.end();
});

module.exports = pool;
