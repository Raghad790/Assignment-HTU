import express from "express";
const app = express();

app.use(express.static("public")); //to access the static files in the static files in the public folder
const port = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {});
