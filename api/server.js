const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//auth-middleware here when finished
//auth-router here when finished
const recipeRouter = require("../recipes/recipes-router");
//users-router here when finished

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

//auth-router here when finished
server.use("/api/recipes", recipeRouter);
//users-router here when finished

server.get("/", (req, res) => {
  res.send("Server Running");
});

module.exports = server;