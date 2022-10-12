import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/BEChallenge");
    console.log("Connection Established");
  } catch (error: any) {
    console.log(error);
    throw Error(error);
  }
};

module.exports = connectDB;
