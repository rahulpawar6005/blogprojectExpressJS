const mongoose = require("mongoose");
const url =
  "mongodb+srv://prishendre91:prishendre91@cluster0.oghwxut.mongodb.net/blogproject";

const connectDB = () => {
  return mongoose
    .connect(url)

    .then(() => {
      console.log("database connection succesfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDB;
