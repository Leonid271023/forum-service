import {Router} from "express";
import postController from "../controillers/post.controller.js";
import validate from "../middlewares/validation.middleware.js";


const router = Router();

router.post("/post/:author",validate('createPost'), postController.createPost);
router.get("/post/:id", postController.getPostById);
router.delete("/post/:id", postController.deletePost);
router.patch("/post/:id/like", postController.addLike);
router.get("/posts/author/:author", postController.getPostsByAuthor);

export default router;