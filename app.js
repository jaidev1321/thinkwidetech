const express = require("express");
const config = require("./inc/config");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("index", {
    pageTitle: config.websiteName,
    websiteName: config.websiteName
  });
});
app.listen(config.port);
