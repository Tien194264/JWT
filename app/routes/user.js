const user = require("../controllers/user.js");
const verifyToken =  require("../middleware/auth");

module.exports = (app) => {
  
  app.post("/register", user.Register);

  app.post("/login", user.Login);

  app.get("/home",verifyToken, user.Home);
  
};
