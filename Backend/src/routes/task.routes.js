import { createTasks, updateTasks } from "../controllers/task.controller.js";
import { Router } from "express";

const router = Router();

router.route("/createTask").post(createTasks);
router.route("/updateTask").post(updateTasks);

export default router;
