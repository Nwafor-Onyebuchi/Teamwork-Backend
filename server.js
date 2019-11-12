const express = require("express");
const pg = require("pg");
const bodyParser = require("body-parser");
const routes = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

routes(app);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
