import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["Completed", "Not Completed"],
      default: "Not Completed",
    },
    UserID: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", taskSchema);
