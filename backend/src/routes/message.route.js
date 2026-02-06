import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: 'uploads/' }); // Configure multer for file uploads

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, upload.single('file'), sendMessage); // Use upload.single('file') for single file uploads

export default router;
