import Post from '../models/post.model.js';

class PostRepository {
    async createPost(postData) {
        const post = new Post(postData);
        return post.save();
    }

    async findPostById(id) {
        return Post.findById(id);
    }

    async deletePost(id) {
        return Post.findByIdAndDelete(id);
    }

    async addLikePost(id) {
        return Post.findByIdAndUpdate(
            id,
            {$inc: {likes: 1}},
            {new: true}
        );
    }

    async findPostsByAuthor(author) {
        return Post.find({author});
    }

    async addComment(id, commenter, message) {
        return Post.findByIdAndUpdate(id,
            {$push: {comments: {user: commenter, message: message}}},
            {new: true})
    }

    async findPostsByTags(tags) {
        return Post.find({
            tags: {$in: tags}
        });
    }

    async findPostByPeriod(dateForm, dateTo) {
        return Post.find({
            dateCreated: {$gte: dateForm, $lte: dateTo}
        })
    }

    async updatePost(id, data) {
        return Post.findByIdAndUpdate(
            id,
            data,
            { new: true }
        );
    }
}

export default new PostRepository();