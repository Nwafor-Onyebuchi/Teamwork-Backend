//User data
const pool = require("../database/config");
const userCtrl = require("../controllers/users");

//Router
const router = (app) => {
  //Get login routes
  app.get("/", userCtrl.getIndexPage);

  //Get all users
  app.get("/users", userCtrl.getAllUsers);

  //Get A single user by ID
  app.get("/users/:id", userCtrl.getSingleUser);

  //Create a user
  app.post("/users", userCtrl.createUser);

  // Update an existing user
  app.put("/users/:id", userCtrl.updateUser);

  // Delete a user with a specified ID
  app.delete("/users/:id", userCtrl.deleteUser);
};
module.exports = router;
