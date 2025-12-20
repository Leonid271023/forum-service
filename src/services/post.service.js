import postRepository from "../repositories/post.repository.js";

class PostService {
    async createPost(author, data) {
        return await postRepository.createPost({...data, author});
    }

    async getPostById(id) {
        const post = await postRepository.findPostById(id);
        if (!post) {
            throw new Error(`Post with id ${id} not found`);
        }
    }

    async addLikePost(id) {
        const post = await postRepository.addLikePost(id);
        if (!post) {
            throw new Error(`Post with id ${id} not found`);
        }
        return post;
    }

    async getPostByAuthor(author) {
        const posts = await postRepository.findPostsByAuthor(author);
        if (!posts || posts.length === 0) {
            throw new Error(`No posts found for author ${author}`);
        }
        return posts;
    }

    async addComment(postId, commenter, message) {
        const post = await postRepository.addComment(postId, commenter, message);
        if (!post) {
            throw new Error(`Post with id ${postId} not found`);
        }
        return post
    }

    async deletePost(postId) {
        const post = await postRepository.deletePost(postId);
        if (!post) {
            throw new Error(`Post with id ${postId} not found`);
        }
        return post;
    }

    async getPostsByTag(tags) {
        const tagsArray = (tags || []).map(t => t.trim().toLowerCase()).filter(Boolean);

        if (tagsArray.length === 0) {
            throw new Error("Tags are required");
        }

        return postRepository.findPostsByTags(tagsArray);
    }


    async getPostsByPeriod(dataForm, dataTo) {
        const posts = await postRepository.findPostByPeriod(dataForm, dataTo);
        if (!posts) {
            throw new Error('No posts found');
        }
        return posts;
    }

    async updatePost(postId, data) {
        const post = await postRepository.updatePost(postId, data);
        if (!post) {
            throw new Error(`Post with id ${postId} not found`);
        }
        return post;
    }
}

export default new PostService();