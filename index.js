const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();

const port = process.env.PORT || 3000;

app.use(expressEjsLayouts);
app.use(express.static("public"));

app.set("view engine", "ejs");

app.set("layout", "./layouts/master");

app.get("/", (req, res) => {
  res.render("pages/index");
});



app.get("/login", (req, res) => {
  res.render("pages/login");
});

app.get("/signup", (req, res) => {
  res.render("pages/signup");
});


app.get("/messages", (req, res) => {
  res.render("pages/messages", {
    layout: "layouts/dashboard",
  });
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

app.get("/account-settings", (req, res) => {
  res.render("pages/account-settings", {
    layout: "layouts/dashboard",
  });
});

app.get("/employer-dashboard", (req, res) => {
  res.render("pages/employer-dashboard", {
    layout: "layouts/dashboard-emp",
  });
});

app.get("/employer-profile", (req, res) => {
  res.render("pages/employer-profile", {
    layout: "layouts/dashboard-emp",
  });
});

app.get("/employer-account-settings", (req, res) => {
  res.render("pages/employer-accountSettings", {
    layout: "layouts/dashboard-emp",
  });
});

app.get("/employer-messages", (req, res) => {
  res.render("pages/employer-messages", {
    layout: "layouts/dashboard-emp",
  });
});

app.get("/submit-job", (req, res) => {
  res.render("pages/submit-job", {
    layout: "layouts/dashboard-emp",
  });
});

app.get("*", (req, res) => {
  res.render("pages/404", { layout: "layouts/auth" });
});


app.listen(port, function () {
  console.log("Server is live!");
});

