const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/userRoutes");
const articleRoute = require("./routes/articleRoutes");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

routes(app);
articleRoute(app);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
