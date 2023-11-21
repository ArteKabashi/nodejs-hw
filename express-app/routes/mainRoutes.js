const express = require("express");
const router = express.Router();

const adminRoutes = require("./adminRoutes");

const path = require("path");

router.get("/", (req, res) => {
  console.log(adminRoutes.products);
  res.render(path.join(__dirname, "..", "views", "index.ejs"));
});

module.exports = router;
