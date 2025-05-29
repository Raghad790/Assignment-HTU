//to operate the server
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname, "../public")); //to use the static files in the public folder

app.use('/',router)



app.listen(process.env.PORT, () => {});
