const express = require("express");
const DB = require("./config/DB.config");
require("dotenv").config();
const app = express();
const cors = require("cors");
const auth = require("./routers/auth.routes");
var cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;

var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
  credentials: true,
};

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// url
app.use("/api/v1/", auth);

DB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running ${PORT} PORT`);
  });
});
