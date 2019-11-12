//User data
const pool = require("../database/config");

//Router
const router = (app) => {
  //Get all users
  app.get("/", (req, res) => {
    res.send({
      message: "Node/Express API"
    });
  });

  app.get("/users", (req, res) => {
    //Get a single user by Id
    pool.query("SELECT * FROM users", (error, result) => {
      if (error) throw error;
      console.log(result);
      res.send(result);
    });
  });

  app.get("/users/:id", (req, res) => {
    const id = req.params.id;

    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, result) => {
      if (error) throw error;
      res.send(result);
    });
  });
};
module.exports = router;
