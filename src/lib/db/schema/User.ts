import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the User model
export interface IUser extends Document {
  userId: string;
  name: string;
  email: string;
  password: string;
  role: string; // Define role as a string for admin, user, etc.
}

// Define the schema for the User model
const userSchema: Schema<IUser> = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "user", // default role
    enum: ["user", "admin"],
  },
});

// Function to get or create the User model
export const getUserModel = (): Model<IUser> => {
  if (mongoose.models && mongoose.models.User) {
    return mongoose.models.User as Model<IUser>;
  }

  return mongoose.model<IUser>("User", userSchema);
};

// Export the User model
export const User = getUserModel();
