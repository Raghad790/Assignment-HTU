/*Exercise 1: Age Verification Page
Goal: Create a form where the user enters their age.
If age ≥ 18, show a page that says "Welcome to the site!"
If not, show a page that says "Sorry, you're too young."*/
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

// //custom middleware
// function ageCheck(req, res, next) {
//   if (req.body && req.body.age >= 18) {
//     isAuth = true;
//   }
//   next(); //to avoid infinte loop
// }
// app.use(ageCheck);

//post method
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index1.html");
});

app.post("/check", (req, res) => {
  const age = parseInt(req.body.age); // convert string to number
  if (age >= 18) {
    res.sendFile(__dirname + "/public/welcome.html");
  } else {
    res.sendFile(__dirname + "/public/sorry.html");
  }
});
//Run the Server
app.listen(port, () => {
  console.log("Server");
});
