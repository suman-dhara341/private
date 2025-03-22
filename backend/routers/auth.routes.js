const { register, login } = require("../controller/auth.controller");

const Router = require("express").Router();

Router.route("/register").post(register);
Router.route("/login").post(login);

module.exports = Router;
