const mongoose = require("mongoose");

console.log(process.env.MONGO_URL);

const connectDB = async () => {
  const conn = await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => {
      console.log(error.message);
    });
  console.log(`Mongodb connected`);
};
module.exports = connectDB;
