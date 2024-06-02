const mongoose = require("mongoose");

const database = () => {
  mongoose
    .connect(
      "mongodb://localhost:27017"
      // "mongodb+srv://bitblze:6VWBf1VnkuAtHMRR@cluster0.8br5o9v.mongodb.net"
    )
    .then((data) => {
      console.log(`Db connected successfully with ${data.connection.host}`);
    })
    .catch((e) => {
      console.log("db error", e);
    });
};

module.exports = database;
