import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index2.html");
});

app.post("/submit", (req, res) => {
  if (req.body.password === "1234" && req.body.username === "admin") {
    res.sendFile(__dirname + "/public/welcome2.html");
  } else {
    res.sendFile(__dirname + "/public/index2.html");
  }
});

app.listen(port, () => {
  console.log("running");
});
