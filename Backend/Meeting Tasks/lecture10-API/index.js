import express from "express";
import bodyParser from "body-parser";
import https from "https";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  const url = "https://api.wheretheiss.at/v1/satellites/25544";

  https.get(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      try {
        const result = JSON.parse(data);
        res.render("index.ejs",  result ); // Pass result as an object
      } catch (error) {
        console.error("Parsing error:", error);
        res.status(500).send("Failed to parse ISS data");
      }
    });
  }).on("error", (err) => {
    console.error("HTTPS request error:", err);
    res.status(500).send("Failed to fetch data from ISS server");
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
