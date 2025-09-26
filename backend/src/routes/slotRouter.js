import { Router } from "express";
import { createSession } from "../controllers/MentorController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const slotRouter = Router();

slotRouter.post("",authMiddleware,  createSession);
slotRouter.post("",authMiddleware,  createSession);




export default slotRouter;
