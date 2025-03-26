import { Task } from "../models/tasks.model.js";
import { User } from "../models/user.model.js";

export const createTasks = async (req, res) => {
  try {
    const { task, email } = req.body;
    if (task.trim() == "") {
      return res.status(400).json({
        message: "Field cannot be empty",
        success: false,
      });
    }

    const currUser = await User.findOne({ email });
    if (!currUser) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    const currTasks = await Task.create({
      task,
      status: "Not Completed",
      UserID: currUser._id,
    });
    if (!currTasks) {
      return res.status(500).json({
        message: "Error in creating the task",
        success: false,
        Response: currTasks,
      });
    }

    return res.status(200).json({
      message: "Successfully created the tasks",
      success: true,
      response: currTasks,
    });
  } catch (error) {
    console.error("Error in creating the tasks", error);

    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};

export const updateTasks = async (req, res) => {
  try {
    const { task, email } = req.body;
    if (task.trim() == "") {
      return res.status(400).json({
        message: "Field cannot be empty",
        success: false,
      });
    }

    const currUser = await User.findOne({ email });
    if (!currUser) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    const currTasks = await Task.create({
      task,
      status: "Not Completed",
      UserID: currUser._id,
    });
    if (!currTasks) {
      return res.status(500).json({
        message: "Error in updating the task",
        success: false,
        Response: currTasks,
      });
    }

    return res.status(200).json({
      message: "Successfully updated the tasks",
      success: true,
      response: currTasks,
    });
  } catch (error) {
    console.error("Error in updating the tasks", error);

    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};
