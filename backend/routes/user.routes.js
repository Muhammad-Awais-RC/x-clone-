import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
	followUnfollowUser,
	getSuggestedUser,
	getUserProfile,
	updateUser,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/profile/:username", authMiddleware, getUserProfile);
router.get("/suggested", authMiddleware, getSuggestedUser);
router.post("/follow/:id", authMiddleware, followUnfollowUser);
router.post("/update", authMiddleware, updateUser);

export default router;
