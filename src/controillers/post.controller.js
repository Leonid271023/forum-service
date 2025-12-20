import PostService from "../services/post.service.js";

class PostController {
    async createPost(req, res, next) {
        try {
            const post = await PostService.createPost(req.params.author ,req.body);
            return res.status(201).json(post);
        } catch (error) {
            return next(error);
        }
    }

    async getPostById(req, res, next) {
        try {
            const post = await PostService.getPostById(req.params.id);
            return res.json(post);
        } catch (error) {
            return next(error);
        }
    }
    async deletePost(req, res, next) {
        try {
            const post = await PostService.deletePost(req.params.id);
            return res.json(post);
        }catch (error) {
            return next(error);
        }
    }

    async addLike(req, res, next) {
        try {
            const post = await PostService.addLikePost(req.params.id);
            return res.json(post);
        }catch (error) {
            return next(error);
        }
    }

    async getPostsByAuthor(req, res, next) {
        try {
            const posts = await PostService.getPostByAuthor(req.params.author);
            return res.json(posts);
        }catch (error) {
            return next(error);
        }
    }
}

export default new PostController();