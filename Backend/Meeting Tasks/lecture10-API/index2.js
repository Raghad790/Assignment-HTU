import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
let color = [
  { color: "red", value: "#f00" },
  { color: "green", value: "#0f0" },
  { color: "blue", value: "#00f" },
  { color: "cyan", value: "#0ff" },
  { color: "magenta", value: "#f0f" },
  { color: "yellow", value: "#ff0" },
  { color: "black", value: "#000" },
  { color: "white", value: "#fff" },
  { color: "gray", value: "#808080" },
  { color: "maroon", value: "#800000" },
  { color: "olive", value: "#808000" },
  { color: "purple", value: "#800080" },
  { color: "teal", value: "#008080" },
  { color: "navy", value: "#000080" },
  { color: "orange", value: "#ffa500" },
  { color: "pink", value: "#ffc0cb" },
  { color: "brown", value: "#a52a2a" },
  { color: "gold", value: "#ffd700" },
  { color: "silver", value: "#c0c0c0" },
  { color: "lime", value: "#00ff00" },
];
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const url = "https://api.wheretheiss.at/v1/satellites/25544";
  try {
    const response = await axios.get(
      "https://api.wheretheiss.at/v1/satellites/25544"
    );
    res.render("index.ejs", response.data);
  } catch (error) {
    console.log("failed to make request", error.message);
    res.status(500).send("failed to fetch data");
  }
});

//get API (the goal of this Api is to return the color list that are mentioned above)
app.get("/color", (req, res) => {
  res.json(JSON.parse(color));
});
//to return a specific color with a specific id

app.get("/color/:id", (req, res) => {
    res.json(JSON.parse(color));
  });
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
