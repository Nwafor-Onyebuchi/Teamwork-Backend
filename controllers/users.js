const pool = require("../database/config");

exports.getIndexPage = (req, res) => {
  res.send({
    message: "Welcome to teamwork!"
  });
};

exports.userLogin = (req, res) => {
  const { email, user_name } = req.body;
  pool.query(
    "SELECT * FROM user_profile WHERE email = $1 AND user_name = $2",
    [email, user_name],
    (error, result) => {
      if (error) throw error;
      res.json({
        status: "Success",
        data: {
          message: "Login successful!",
          result
        }
      });
    }
  );
};

exports.getAllUsers = (req, res) => {
  pool.query("SELECT * FROM user_profile", (error, result) => {
    if (error) throw error;
    console.log(result);
    res.json({
      status: "Success",
      data: result
    });
  });
};

exports.getSingleUser = (req, res) => {
  const id = req.params.id;

  pool.query(
    "SELECT * FROM user_profile WHERE id = $1",
    [id],
    (error, result) => {
      if (error) throw error;

      res.json({
        status: "Success",
        data: result
      });
    }
  );
};

exports.createUser = (req, res) => {
  const {
    first_name,
    last_name,
    email,
    gender,
    job_role,
    department,
    address,
    pswd,
    user_name
  } = req.body;
  pool.query(
    "INSERT INTO user_profile (first_name,last_name, email, gender, job_role, department, address, pswd, user_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
    [
      first_name,
      last_name,
      email,
      gender,
      job_role,
      department,
      address,
      pswd,
      user_name
    ],
    (error, result) => {
      if (error) throw error;

      res.status(201).json({
        status: "Success",
        data: {
          message: "User successfully created",
          userId: result.insertId
        }
      });
    }
  );
};

exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { first_name, email } = req.body;

  pool.query(
    "UPDATE user_profile SET first_name = $1, email = $2 WHERE id = $3",
    [first_name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(
    "DELETE FROM user_profile WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User deleted with ID: ${id}`);
    }
  );
};
