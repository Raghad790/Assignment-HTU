import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let colors = [
  { id: 1, color: "red", value: "#f00" },
  { id: 2, color: "green", value: "#0f0" },
  { id: 3, color: "blue", value: "#00f" },
  { id: 4, color: "yellow", value: "#ff0" },
  { id: 5, color: "black", value: "#000" },
  { id: 6, color: "white", value: "#fff" },
  { id: 7, color: "orange", value: "#ffa500" },
  { id: 8, color: "green", value: "#0f0" },
];
let lastId = 8;
app.use(bodyParser.urlencoded({ extended: true }));

//Api doing get(restful API))
app.get("/colors", (req, res) => {
  res.json(colors);
});
//Get=>Return Values
app.get("/random", (req, res) => {
  const randomColor = Math.floor(Math.random() * colors.length);
  res.json(colors[randomColor]);
});
//id==paramerter
//اي reqلازم نحولها الى Intger
//parseInt ===parse integer
app.get("/colors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const colorObj = colors.find((color) => color.id === id);
  res.json(colorObj);
});
//filtering==URL filtering(query)
//filter=>array
app.get("/filter", (req, res) => {
  const colorQ = req.query.color;
  const listOfFilteredColors = colors.filter((color) => color.color === colorQ);
  res.json(listOfFilteredColors);
});
//post=>create values
//client cant create id ..in postman we didnt create id
app.post("/colors", (req, res) => {
  lastId++;
  const newColor = {
    id: lastId,
    color: req.body.color,
    value: req.body.value,
  };
  colors.push(newColor);
  res.status(200).json(newColor);
});

//put==edit
//id => not allowed to be updated
app.put("/colors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedColor = {
    id: id,
    color: req.body.color,
    value: req.body.value,
  };

  const colorIndex = colors.findIndex((color) => color.id === id);
  colors[colorIndex] = updatedColor;
  res.json(updatedColor);
});

//patch updates just one varaible
app.patch("/colors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const colorIndex = colors.findIndex((color) => color.id === id);
  const colorObj = colors[colorIndex];
  const updatedColor = {
    id: id,
    color: req.body.color || colorObj.color,
    value: req.body.value || colorObj.value,
  };

  colors[colorIndex] = updatedColor;
  res.json(updatedColor);
});

app.delete("/colors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const colorIndex = colors.findIndex((color) => color.id === id);
  if (colorIndex > -1) {
    colors.splice(colorIndex, 1);
    res.sendStatus(200);
  } else {
    res.status(404).json({ error: `Color id ${id} not found` });
    //status =>chain method
  }
});

app.delete("/all", (req, res) => {
  colors = [];
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//CRUD Operations =>create==post
// update=put,patch
// read=Get
// delete=delete
///means:make APIs for those operations

///entities:class,user,tenant
//swagger ==api interface
