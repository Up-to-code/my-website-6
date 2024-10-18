import { Sub } from "@/lib/db/schema/Sub";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Request body:", body); // Log the full request body
    const subEmail = body.email;

    // Validate the email
    if (!subEmail || typeof subEmail !== 'string') {
      throw new Error("Subscription email is missing or invalid");
    }

    // Log to ensure the email is being captured correctly
    console.log("Subscribing email:", subEmail);

    // Check if the email already exists in the database
    const find = await Sub.findOne({
      where: { email: subEmail },
    });

    if (find) {
      console.log("Email is already subscribed:", subEmail);
      return new NextResponse("Email is already subscribed", { status: 400 });
    }

    // Log database connection status
    console.log("Database connected and query executed");

    // Create a new subscription entry
    const newSub = await Sub.create(
        { email: subEmail }, // Ensure this matches the expected schema
    );

    console.log("New subscription created:", newSub); // Log the new subscription

    return new NextResponse("Subscription successful", { status: 200, statusText: "OK" });

  } catch (error: unknown) {
    // Handle and log the error for debugging
    console.error("Error occurred:", error instanceof Error ? error.message : error);
    return new NextResponse(`Error: ${error instanceof Error ? error.message : "Internal Server Error"}`, { status: 500 });
  }
}
