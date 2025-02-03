const express = require("express");
const axios = require("axios");
const cors = require("cors");
const config = require("../../config.js");

const app = express();

const URI = `https://localhost:${config.API}`;

process.on("uncaughtException", function (err) {
    console.log(err);
});

app.use(cors());
app.use(express.json());

// App use
app.use("/", (req, res, next) => {
    console.log("Connected to the API");
    next();
});

// Routes

app.listen(config.API, () => {
    console.log(`API server is running on ${URI}`);
});
