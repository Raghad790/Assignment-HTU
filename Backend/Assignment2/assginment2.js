import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let userInfo = {
  email: null,
  password: null,
};
//custom middle ware
app.use(bodyParser.urlencoded({ extended: true }));
function saveToDo(req, res, next) {
  if (req.body) {
    userInfo.email = req.body.email;
    userInfo.password = req.body.password;
  }
  next();
}
app.use(saveToDo);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(
    `<h1>Your email ${userInfo.email}and password ${userInfo.password}</h1>`
  );
});

app.listen(port, () => {
  console.log("Server");
});
