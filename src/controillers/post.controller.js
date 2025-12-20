import PostService from "../services/post.service.js";

class PostController {
    async createPost(req, res, next) {
        try {
            const post = await PostService.createPost(req.params.author, req.body);
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
        } catch (error) {
            return next(error);
        }
    }

    async patchAddLike(req, res, next) {
        try {
            const post = await PostService.addLikePost(req.params.id);
            return res.json(post);
        } catch (error) {
            return next(error);
        }
    }

    async getPostsByAuthor(req, res, next) {
        try {
            const posts = await PostService.getPostByAuthor(req.params.author);
            return res.json(posts);
        } catch (error) {
            return next(error);
        }
    }

    async patchAddComment(req, res, next) {
        try {
            const postId = req.params.id;
            const commenter = req.params.commenter;
            const {message} = req.body;

            const post = await PostService.addComment(postId, commenter, message);

            return res.json(post);
        } catch (error) {
            return next(error);
        }
    }

    async getPostsByTags(req, res, next) {
        try {
            const {values} = req.query;

            if (!values) {
                return res.status(400).json({message: "tags are required"});
            }

            const tags = req.query.values
                .split(',')

            const posts = await PostService.getPostsByTag(tags);
            return res.json(posts);
        } catch (error) {
            return next(error);
        }
    }

    async getPostsByPeriod(req, res, next) {
        try {
            const {dateForm, dateTo} = req.query;
            const posts = await PostService.getPostsByPeriod(dateForm, dateTo);
            return res.json(posts);
        }catch (error) {
            return next(error);
        }
    }

    async patchUpdatePost(req, res, next) {
        try {
            const post = await PostService.updatePost(req.params.id, req.body);
            return res.json(post);
        }catch (error) {
            return next(error);
        }
    }
}

export default new PostController();