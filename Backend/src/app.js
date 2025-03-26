import express, { urlencoded } from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.CORS,
    credentials: true,
  })
);
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));

// User routes
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);

// Tasks Routes
import taskRouter from "./routes/task.routes.js";
app.use("/api/v1/tasks", taskRouter);

export { app };
