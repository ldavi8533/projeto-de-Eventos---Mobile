require("dotenv").config();
const express = require("express");
const router = require("./controller/users/login");
const login = require("./controller/users/login")
const register = require("./controller/users/register")
const connectdb = require("./database/db")

const app = express();
connectdb();

app.use(
  express.urlencoded({
      extended: true,
  }),
);

// models
const User = require("./models/User");

// Config JSON response
app.use(express.json());

//Routes
app.use('/register', register)

app.use('/login', login)