import { Router } from "express";
import { createSession, getMentorProfile } from "../controllers/MentorController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const mentorRouter = Router();

mentorRouter.get("/profile",authMiddleware,  getMentorProfile);




export default mentorRouter;
