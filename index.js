// const http = require("http");
// const app = require("./app");
// const server = http.createServer(app);

const express = require("express");

require("dotenv").config();
require("./app/config/database.js").connect();

const jwt = require("jsonwebtoken");

const User = require("./app/model/user");
const auth = require("./app/middleware/auth");
const { connect } = require("mongoose");

const app = express();

app.use(express.json());

require("./app/routes/user.js")(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});