import postRepository from "../repositories/post.repository.js";

class PostService {
    async createPost(author, data) {
        return await  postRepository.createPost({...data, author});
    }

    async getPostById(id){
        const post = await postRepository.findPostById(id);
        if(!post){
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

    async addComment(postId, commenter, message){
        //TODO add comment to post by id
        throw new Error('Not implemented');
    }

    async deletePost(postId){
        const post = await postRepository.deletePost(postId);
        if(!post){
            throw new Error(`Post with id ${postId} not found`);
        }
        return post;
    }

    async getPostsByTag(tagsString){
        //TODO return posts by tags
        throw new Error('Not implemented');
    }

    async getPostsByPeriod(dataForm, dataTo){
        //TODO return posts by period
        throw new Error('Not implemented');
    }

    async updatePost(postId, data){
        //TODO update post by id
        throw new Error('Not implemented');
    }
}

export default new PostService();