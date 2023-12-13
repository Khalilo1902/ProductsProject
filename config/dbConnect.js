import mongoose from "mongoose";

const dbConnect = () => {
  try {
    mongoose.connect(process.env.SERVER_URL);
    console.log(`data base ist connected`)
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect