//User data
const pool = require("../database/config");

//Router
const router = (app) => {
  //Get login routes
  app.get("/", (req, res) => {
    res.send({
      message: "Welcome to teamwork!"
    });
  });

  app.get("/users", (req, res) => {
    //Get all users
    pool.query("SELECT * FROM user_profile", (error, result) => {
      if (error) throw error;
      console.log(result);
      res.send(result);
    });
  });

  //Get A single user by ID
  app.get("/users/:id", (req, res) => {
    const id = req.params.id;

    pool.query(
      "SELECT * FROM user_profile WHERE id = $1",
      [id],
      (error, result) => {
        if (error) throw error;

        res.send(result);
      }
    );
  });

  //Create a user
  app.post("/users", (req, res) => {
    const {
      first_name,
      last_name,
      email,
      gender,
      job_role,
      department,
      address
    } = req.body;
    pool.query(
      "INSERT INTO user_profile (first_name,last_name, email, gender, job_role, department, address) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [first_name, last_name, email, gender, job_role, department, address],
      (error, result) => {
        if (error) throw error;

        res.status(201).send("User added successfully");
      }
    );
  });
};
module.exports = router;
