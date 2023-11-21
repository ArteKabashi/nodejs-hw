const express = require("express");
const router = express.Router();

const path = require("path");

const products = [];

router.get("/add-product", (req, res) => {
  res.render(path.join(__dirname, "..", "views", "add-product.ejs"));
});

router.post("/product", (req, res) => {
  products.push(req.body.product);
  console.log(req.body.product);
  res.redirect("/admin/add-product");
});

// module.exports = router;
exports.routes = router;
exports.products = products;
