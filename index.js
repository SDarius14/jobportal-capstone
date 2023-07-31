const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const expressLayouts = require("express-ejs-layouts");
const app = express();

app.use(expressEjsLayouts);
app.use(express.static("public"));

app.set("view engine", "ejs");

app.set("layout", "./layouts/master");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/login", (req, res) => {
  res.render("pages/login", {
    layout: "layouts/auth",
  });
});

app.listen(3300);
console.log("listening to port: 3300");
