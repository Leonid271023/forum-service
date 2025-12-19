class PostService {
    async createPost(userName, data) {
           //TODO add post. data
        throw new Error('Not implemented');
    }

    async getPostById(id){
        //TODO return post by id
        throw new Error('Not implemented');
    }

    async addLike(postId){
        //TODO add like to post
        throw new Error('Not implemented');
    }

    async getPostByAuthor(author){
        //TODO return posts by author
        throw new Error('Not implemented');
    }

    async addComment(postId, commenter, message){
        //TODO add comment to post by id
        throw new Error('Not implemented');
    }

    async deletePost(postId){
        //TODO delete post by id
        throw new Error('Not implemented');
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