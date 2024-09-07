import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
        }]
},{timestamps: true})
const post = mongoose.model('post',postSchema)
export default post;