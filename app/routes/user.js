module.exports = (app) => {
  const user = require("../controllers/user.js");

  app.post("/register", user.Register);

  app.post("/login", user.Login);

  app.get("/welcome", user.Home);
  

  app.get("/*", user.Founded);
};
