import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
	deleteNotifications,
	getNotifications,
} from "../controllers/notifaction.controllers.js";

const router = express.Router();

router.get("/", authMiddleware, getNotifications);
router.delete("/", authMiddleware, deleteNotifications);

export default router;
