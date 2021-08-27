require("dotenv").config();
require("./app/config/database.js").connect();
const express = require("express");
const auth = require("./app/middleware/auth");
const app = express();

app.use(express.json());

require("./app/routes/user.js")(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});