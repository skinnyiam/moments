import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    createdBy: String,
    tags: [String],
    //we will convert it into base64 string
    image: String,
    like: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostDetail = mongoose.model('PostDetails', postSchema)

export default PostDetail;