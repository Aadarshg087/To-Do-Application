import { User } from "../models/user.model.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === "" || password === "") {
      return res.status(400).json({
        message: "Both Fields are mandatory",
        success: false,
      });
    }
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return res.status(400).json({
        message: "User does not exists",
        success: false,
      });
    }

    return res.status(200).json({
      message: "User logged in successfully",
      status: true,
    });
  } catch (error) {
    console.error("Error in loginUser:", error); // Logs the error for debugging

    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message, // Provides more context in the response
    });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Both Fields are mandatory",
        success: false,
      });
    }

    const isUserExists = await User.findOne({ email });
    if (isUserExists) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const createUser = await User.create({ email, password });
    const checkUser = await User.findById(createUser._id).select("-password");
    if (!checkUser) {
      return res.status(500).json({
        message: "Error in creating the user",
        success: false,
        error: checkUser,
      });
    }

    console.log(checkUser);
    return res.status(200).json({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error in loginUser:", error); // Logs the error for debugging

    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message, // Provides more context in the response
    });
  }
};
