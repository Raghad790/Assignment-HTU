import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port,()=>{
    console.log("API")
})