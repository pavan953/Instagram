import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type:String,
        required:true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }

},{timestamps:true})

const comment = mongoose.model('comment',commentSchema)

export default comment