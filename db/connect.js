const mongoose = require("mongoose");

const connectDB = async (uri) => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to db");
};

module.exports = connectDB;
