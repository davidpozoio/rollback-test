const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.status(200).json({
    users: [],
  });
});

app.get("/examples", (req, res) => {
  res.status(200).json({
    examples: [],
  });
});

module.exports = app;
