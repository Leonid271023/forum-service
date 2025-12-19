import Post from '../models/post.model';

export function createPost(id, author){
    return Post.create(id, author);
}
export function getPostById(id){
    return Post.findById(id);
}