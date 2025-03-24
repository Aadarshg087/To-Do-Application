import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/ToDoApp`
    );
    console.log("Mongo DB is connected", connectionInstance.connection.host);
  } catch (error) {
    console.log("Error in connection to DB", error);
    process.exit(1);
  }
};

export default connectDB;
