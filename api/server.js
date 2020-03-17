const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "SERVER IS UP" });
});

//Endpoints and Routes here

module.exports = server;
