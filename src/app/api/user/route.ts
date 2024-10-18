import { connectDB } from "@/lib/db/connectDB";
import { User } from "@/lib/db/schema/User";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function GET() {
  try {
    // Ensure DB connection
    await connectDB();

    // Get userId from Clerk auth
    const { userId } = auth();

    // Check for userId
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    // Check if user exists in your database
    let user = await User.findOne({ _id: userId });

    // If user does not exist, create a new user
    if (!user) {
      const UserApp = await currentUser();
      if (!UserApp) {
        return new Response("User not found", { status: 404 });
      }

      // Create a new user in your database
      const CreateUser = await User.create({
         _id : userId,
        name: `${UserApp.firstName} ${UserApp.lastName}`,
        email: UserApp.emailAddresses[0]?.emailAddress || "No Email", // Ensure email exists
        role: "user",
      });

      if (!CreateUser) {
        return new Response("User creation failed", { status: 500 });
      }

      user = CreateUser; // Assign the newly created user
    }

    // Return the user data
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (error) {
    console.error("Error during fetch:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
