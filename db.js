const mongoose = require("mongoose");
require('dotenv').config();
dbConnect();
async function dbConnect() {
  try {
    await mongoose.connect(
        `mongodb+srv://Gsathiya:capstoneproject@cluster0.ktemn.mongodb.net/MernRooms?retryWrites=true&w=majority`,
      { useNewUrlParser: true ,useUnifiedTopology: true }
    );
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.log("MongoDb connection failed");
  }
}

module.exports = mongoose;
