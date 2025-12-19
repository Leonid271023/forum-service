import mongoose from 'mongoose';

const postModel = new mongoose.Schema(
    {
        title: {type: String, required: true},
        content: {type: String, required: true},
        author: {type: String, required: true},

        dateCreated: {type: Date, default: Date.now},

        tags: {type: [String], default: []},

        likes: {type: Number, default: 0},

        comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    },
    {
        versionKey: false,
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id.toString();
                delete ret._id;
            },
        },
    }
);

const Post = mongoose.model('Post', postModel);
export default Post;