const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "teamwork",
  host: "localhost",
  database: "teamwork",
  password: "teamwork",
  port: 5432
});
pool.query("SELECT * FROM user_profile", (err, res) => {
  console.log(err, res);
  //pool.end();
});

module.exports = pool;
