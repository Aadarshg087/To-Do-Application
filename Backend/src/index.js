import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./databases/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error in connecting to the database", err);
  });
