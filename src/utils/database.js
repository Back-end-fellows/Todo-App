const mongoose = require("mongoose");

async function ConnectDatabase() {
  try {
    await mongoose.connect(
      // "mongodb://mongo:Lz7XuVUX11cyqfwKBpIk@containers-us-west-44.railway.app:7796"
      "mongodb+srv://vic-coded:viccy123@cluster0.99pysws.mongodb.net/?retryWrites=true&w=majority",
      () => {
        console.log("database connected");
      }
    );
  } catch (error) {
    console.error(error);
  }
}

module.exports = ConnectDatabase;
