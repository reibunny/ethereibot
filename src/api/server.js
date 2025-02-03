import express from "express";
import axios from "axios";
import cors from "cors";
import { API } from "../../config.js";

const app = express();

const URI = `https://localhost:${API}`;

process.on("uncaughtException", function (error) {
    console.log(error);
});

app.use(cors());
app.use(express.json());

// App use
app.use("/", (req, res, next) => {
    console.log("Connected to the API");
    next();
});

// Routes

app.listen(API, () => {
    console.log(`API server is running on ${URI}`);
});
