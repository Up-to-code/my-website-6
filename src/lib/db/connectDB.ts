import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI; // Ensure this is the correct environment variable

  if (!uri) {
    throw new Error("MongoDB connection string is undefined");
  }

  try {
    await mongoose.connect(uri, {
    
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow the error to be caught in the calling function
  }
};
