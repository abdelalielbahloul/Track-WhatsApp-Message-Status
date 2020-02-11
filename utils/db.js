const mongoose = require("mongoose");
require('dotenv').config();
const cnx = process.env.cnx;

const connect = async () => {
  mongoose.connect(`${cnx}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  await db.once("open", function() {
    console.log("Database successfully connected");
  });
};

module.exports = connect;
