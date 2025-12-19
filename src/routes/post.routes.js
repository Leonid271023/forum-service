import express from "express";
import postController from "../controillers/post.controller.js";
import validate from "../middlewares/validation.middleware.js";


const router = express.Router();

router.post("/post/:author", postController.createPost);
router.get("/post/:id", postController.getPostById);

export default router;