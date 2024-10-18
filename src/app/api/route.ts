import { connectDB } from "@/lib/db/connectDB";
import Project from "@/lib/db/schema/Projects";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  await connectDB();
  try {
    // Extracting data from the request body (if necessary)
    const body = await req.json(); // Extracts the body data in JSON format

    // Create a new project using the extracted data
    const newProject = new Project({
      name: body.name || "إعادة تصميم الموقع",
      status: body.status || "قيد التنفيذ",
      image: body.image || "/placeholder.svg?height=100&width=200",
      skills: body.skills || ["React", "Tailwind CSS", "Next.js"],
      githubUrl:
        body.githubUrl || "https://github.com/username/website-redesign",
      liveUrl: body.liveUrl || "https://website-redesign.example.com",
    });

    // Save the project to the database
    await newProject.save();

    // Return a success response
    return NextResponse.json(
      { message: "Project created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    // Return an error response
    return NextResponse.json(
      { message: "Error creating project", error: (error as Error).message },
      { status: 500 }
    );
  }
};
