// lib/db/userUtils.ts
import { connectDB } from "./connectDB";
import { User, IUser } from "./schema/User"; // Adjust the path as necessary

export const getUserById = async (userId: string): Promise<IUser | null> => {
  try {
        // Connect to the database
        await connectDB();
    return await User.findOne({ _id: userId });
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw new Error("Database query failed");
  }
};
