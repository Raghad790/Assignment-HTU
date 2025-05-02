import express from "express";
const app = express();

let adj = [
  "kind",
  "brave",
  "smart",
  "strong",
  "funny",
  "friendly",
  "creative",
  "honest",
  "patient",
  "curious",
  "loyal",
  "shy",
  "energetic",
  "calm",
  "thoughtful",
  "serious",
  "ambitious",
  "polite",
  "generous",
  "hardworking",
];
let noun = [
  "teacher",
  "artist",
  "doctor",
  "engineer",
  "student",
  "parent",
  "friend",
  "leader",
  "child",
  "worker",
  "singer",
  "dancer",
  "actor",
  "writer",
  "driver",
  "chef",
  "nurse",
  "athlete",
  "scientist",
  "pilot",
];
app.use(express.static("public"));
const port = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/submit", (req, res) => {
  const randomName1 = adj[Math.floor(Math.random() * adj.length)];
  const randomName2 = noun[Math.floor(Math.random() * noun.length)];
  res.render("index.ejs", {
    randomName1: randomName1,
    randomName2: randomName2,
  });
});

app.listen(port, () => {});
