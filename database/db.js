const mongoose = require("mongoose");

const express = require("express");
const app = express();

const connectdb = () =>{
mongoose
  .connect(
    `mongodb://localhost:27017/mobile`
  )
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(8080);
  })
  .catch((err) => console.log(err));
}

module.exports = connectdb