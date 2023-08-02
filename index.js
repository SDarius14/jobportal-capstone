const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();

app.use(expressEjsLayouts);
app.use(express.static("public"));

app.set("view engine", "ejs");

app.set("layout", "./layouts/master");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/job-list", (req, res) => {
  res.render("pages/job-list");
});

app.get("/job-details", (req, res) => {
  res.render("pages/job-details");
});

app.get("/candidates", (req, res) => {
  res.render("pages/candidates");
});

app.get("/candidate-profile", (req, res) => {
  res.render("pages/candidate-profile");
});


app.get("/candidate-dashboard", (req, res) => {
  res.render("pages/candidate-dashboard", {
    layout: "layouts/dashboard",
  });
});

app.get("/my-profile", (req, res) => {
  res.render("pages/my-profile", {
    layout: "layouts/dashboard",
  });
});

app.listen(3300);
console.log("listening to port: 3300");
