const pool = require("../database/config");
const jwt = require("jsonwebtoken");
const moment = require("moment");

exports.createArticle = (req, res) => {
  const date = Date.now();
  const { title, article, id } = req.body;
  pool.query(
    "INSERT INTO articles(title, article) VALUES($1, $2)",
    [title, article],
    (error, result) => {
      if (error) throw error;

      jwt.verify(req.token, "secretkey", (err) => {
        if (err) {
          res.sendStatus(403);
        } else {
          res.status(201).json({
            status: "Success",
            data: {
              message: "Article successfully posted",
              articleId: req.params.id,
              createdOn: date,
              id,
              token: req.token
            }
          });
        }
      });
    }
  );
};

exports.verifyToken = (req, res, next) => {
  const bearerHearder = req.headers["authorization"];
  if (typeof bearerHearder !== "undefined") {
    const bearer = bearerHearder.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

exports.getArticles = (req, res) => {
  pool.query("SELECT * FROM articles", (error, result) => {
    if (error) throw error;
    res.json({
      data: {
        message: "Success",
        result
      }
    });
  });
};

exports.updateArticle = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, article } = req.body;

  pool.query(
    "UPDATE articles SET title = $1, article = $2 WHERE id = $3",
    [title, article, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json({
        data: {
          message: "Article successfully updated",
          title
        }
      });
    }
  );
};

exports.deleteArticle = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("DELETE FROM articles WHERE id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.json({
      data: {
        message: `Article successfully deleted. Article ID: ${id}`
      }
    });
  });
};
