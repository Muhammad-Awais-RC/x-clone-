import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
	commentOnPost,
	createPost,
	deletePost,
	getAllPosts,
	getFollowingPosts,
	getLikedPosts,
	getUserPosts,
	likeUnlikePost,
} from "../controllers/post.controllers.js";

const router = express.Router();

router.get("/all", authMiddleware, getAllPosts);
router.get("/following", authMiddleware, getFollowingPosts);
router.get("/user/:username", authMiddleware, getUserPosts);
router.get("/liked/:id", authMiddleware, getLikedPosts);
router.post("/create", authMiddleware, createPost);
router.delete("/delete/:id", authMiddleware, deletePost);
router.post("/like/:id", authMiddleware, likeUnlikePost);
router.post("/comment/:id", authMiddleware, commentOnPost);

export default router;
