const express = require("express");
const app = express();

const path = require("path");
const bodyParser = require("body-parser");

const mainRoutes = require("./routes/mainRoutes");
const adminRoutes = require("./routes/adminRoutes");

const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", mainRoutes);
app.use("/admin", adminRoutes.routes);

app.use((req, res) => {
  res.status(404).render(path.join(__dirname, "views", "404.ejs"));
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
