const mongoose = require("mongoose");

const DB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connection successful");
    
  } catch (error) {
    console.log("Database connection problem", error);
  }
};

module.exports = DB;
