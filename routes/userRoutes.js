const userCtrl = require("../controllers/users");

//Router
const router = (app) => {
  //Get index route
  app.get("/", userCtrl.verifyToken, userCtrl.getIndexPage);

  //User login
  app.post("/auth/signin", userCtrl.userLogin);

  //Get all users
  app.get("/users", userCtrl.getAllUsers);

  //Get A single user by ID
  app.get("/users/:id", userCtrl.getSingleUser);

  //Create a user
  app.post("/auth/create-user", userCtrl.verifyToken, userCtrl.createUser);

  // Update an existing user
  app.put("/users/:id", userCtrl.updateUser);

  // Delete a user with a specified ID
  app.delete("/users/:id", userCtrl.deleteUser);
};

module.exports = router;
