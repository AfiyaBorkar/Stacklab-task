const mongoose = require("mongoose");

const dbconnect = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Successfully connected to db");
    })
    .catch((e) => {
      console.log(e.message);
    });
};

module.exports={dbconnect}
