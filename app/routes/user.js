const user = require("../controllers/user.js");

module.exports = (app) => {
  
  app.post("/register", user.Register);

  app.post("/login", user.Login);

  app.get("/welcome", user.Home);
  
};
