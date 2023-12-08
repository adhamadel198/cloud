const mongoose = require('mongoose');

const initDBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URI);
    console.log("Connected to DB Server");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initDBConnection;