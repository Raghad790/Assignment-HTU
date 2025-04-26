import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
const correctPassword = "web";
let isAuth = false;

// //custom middleware
function passwordCheck(req, res, next) {
  if (req.body && req.body.password === correctPassword) {
    isAuth = true;
  }
  next(); //to avoid infinte loop
}
app.use(passwordCheck);

//post method
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  if (isAuth) {
    res.sendFile(__dirname + "/public/secrets.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});
//Run the Server
app.listen(port, () => {
  console.log("Server");
});
