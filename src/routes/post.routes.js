import {Router} from "express";
import postController from "../controillers/post.controller.js";
import validate from "../middlewares/validation.middleware.js";
import loginEqualsParam from "../middlewares/loginEqualsParam.js";
import postOwnerOrModerator from "../middlewares/postOwnerOrModerator.js";
import postOwnerOnly from "../middlewares/postOwnerOnly,.js";



const router = Router();

router.post('/post/:author',loginEqualsParam('author'), validate('createPost'), postController.createPost)
router.get('/post/:id', postController.getPostById)
router.delete('/post/:id',postOwnerOrModerator, postController.deletePost)
router.patch('/post/:id/like', postController.addLike);
router.get('/posts/author/:author', postController.getPostsByAuthor);
router.patch('/post/:id/comment/:commenter',loginEqualsParam('commenter'), validate('addComment'), postController.addComment);
router.get('/posts/tags', postController.getPostsByTags);
router.get('/posts/period', validate('dateFormat', 'query'), postController.getPostsByPeriod);
router.patch('/post/:id',postOwnerOnly, validate('updatePost'), postController.updatePost);

export default router;