const {
  register,
  login,
  userProfileGet,
  userProfileUpdate,
} = require("../controller/auth.controller");
const token = require("../middleware/token");

const Router = require("express").Router();

Router.route("/register").post(register);
Router.route("/login").post(login);
Router.route("/profile").get(token, userProfileGet);

Router.route("/profile-update").put(token, userProfileUpdate);

module.exports = Router;
