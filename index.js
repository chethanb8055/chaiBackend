const express = require("express");
require("dotenv").config();
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("hellow World");
});
app.get("/home", (req, res) => {
  res.send("Home");
});
app.get("/singup", (req, res) => {
  res.send("sinup");
});

app.listen(process.env.PORT, () => {
  console.log(`sever is ruuning ${process.env.PORT}`);
});
