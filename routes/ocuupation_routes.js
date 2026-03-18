import express from "express";
import { getOccupationController } from "../controllers/resume_controller.js";

const router = express.Router();

// This route generates interview questions
router.post("/occupation", getOccupationController);

export default router;