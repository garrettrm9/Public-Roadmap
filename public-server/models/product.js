const db = require("../db/index.js");
const product = {};

product.getAllProducts = (req, res, next) => {
  db
    .manyOrNone("SELECT * from products")
    .then(products => {
      res.locals.products = products;
      next();
    })
    .catch(error => {
      console.log("error from getAllProducts model", error);
      next(error);
    });
};

product.getOneProduct = (req, res, next) => {
  db
    .one("SELECT * from products WHERE id=$1", [req.params.product_id])
    .then(product => {
      res.locals.product = product;
      next();
    })
    .catch(error => {
      console.log("error from getOneProduct model", error);
      next(error);
    });
};

product.getAllFeatures = (req, res, next) => {
  db
    .manyOrNone("SELECT * from features WHERE product_name=$1", [
      req.params.product_name
    ])
    .then(features => {
      res.locals.features = features;
      next();
    })
    .catch(error => {
      console.log("error from getAllFeatures model", error);
      next(error);
    });
};

product.newProduct = (req, res, next) => {
  db
    .one("INSERT INTO products (name) VALUES ($1) RETURNING *", [req.body.name])
    .then(id => {
      res.locals.id = id;
      next();
    })
    .catch(error => {
      console.log("error from newProduct model", error);
      next(error);
    });
};

product.editProduct = (req, res, next) => {
  db
    .one("UPDATE products SET name=$1 WHERE id=$2 RETURNING *", [
      req.body.name,
      req.params.product_id
    ])
    .then(product => {
      res.locals.product = product;
      next();
    })
    .catch(error => {
      console.log("error from editProduct model", error);
      next(error);
    });
};

product.deleteProduct = (req, res, next) => {
  db
    .none("DELETE from products WHERE id=$1", [req.params.product_id])
    .then(() => {
      next();
    })
    .catch(error => {
      console.log("error from deleteProduct model", error);
      next(error);
    });
};

module.exports = product;
