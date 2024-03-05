import express from "express";
import ejs from "ejs";
import path from "path";

const app = express();

// Set 'views' directory for EJS templates
app.set("views", path.join(path.resolve(), "src", "views"));

// Set EJS as the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // Render the login.ejs file
  res.render("login");
});

export default app;