const articleCtrl = require("../controllers/articles");

const articleRoute = (app) => {
  app.get("/articles", articleCtrl.getArticles);

  app.post("/articles", articleCtrl.verifyToken, articleCtrl.createArticle);

  app.put("/articles/:id", articleCtrl.updateArticle);
};

module.exports = articleRoute;
