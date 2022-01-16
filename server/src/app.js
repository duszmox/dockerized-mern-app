const express = require("express");
const mongoose = require("mongoose");
const app = express();
const apiPort = 5000;
const cors = require("cors");


app.use(express.json());
app.set("json spaces", 2);
app.use(cors());

// set /api as the only route
app.get("/", (req, res) => {
  res
    .json({
      message: "Use /api to access the API",
    })
    .status(403);
});
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
module.exports = app;
