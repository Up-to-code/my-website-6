import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the Project document
interface IProject extends Document {
  name: string;
  status: string;
  image: string;
  skills: string[];
  githubUrl: string;
  liveUrl: string;
}

// Create the schema for Project
const ProjectSchema: Schema<IProject> = new Schema(
  {
    name: { type: String, required: true, trim: true }, // Project name in Arabic
    status: {
      type: String,
      required: true,
      enum: ["قيد التنفيذ", "مكتمل", "مؤجل"],
    }, // Project status with enum
    image: { type: String, required: true }, // Image URL
    skills: { type: [String], required: true }, // Array of skills
    githubUrl: { type: String, required: true }, // GitHub URL
    liveUrl: { type: String, required: true }, // Live project URL
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Create the model
const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
