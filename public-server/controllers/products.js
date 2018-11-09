const router = require("express").Router();
const product = require("../models/product");

router.get("/", product.getAllProducts, (req, res) => {
  const { products } = res.locals;
  res.json(products);
});

router.get("/:product_id", product.getOneProduct, (req, res) => {
  const { product } = res.locals;
  res.json(product);
});

router.get("/:product_id/features", product.getAllFeatures, (req, res) => {
  const { features } = res.locals;
  res.json(features);
});

router.post("/", product.newProduct, (req, res) => {
  res.json(res.locals);
});

router.put("/:product_id", product.editProduct, (req, res) => {
  const { product } = res.locals;
  res.json(product);
});

router.delete("/:product_id", product.deleteProduct, (req, res) => {
  res.json();
});

module.exports = router;
