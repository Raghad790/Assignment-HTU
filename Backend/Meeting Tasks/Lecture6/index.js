import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const name = req.body.name;
  res.render("index.ejs", {
    name: name,
    cart: ["item1", "item2", "item3", "item4"],
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam possimus officiis quia fuga, repellat, tenetur voluptatum nostrum omnis autem earum eaque veniam officia quis quisquam, labore enim unde haru.",
  });
});

app.listen(port, () => {
  console.log("Server");
});
//send :send html files and its not practical
//sendFile:just for static html files
