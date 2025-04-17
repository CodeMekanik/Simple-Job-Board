import mongoose from "mongoose";

const mongoDBURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/SimpleJobBoard";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBURI);
    console.log("✅✅✅MongoDB connected successfully");
  } catch (error) {
    console.error("❌❌❌MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
