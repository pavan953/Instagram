import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

const message =mongoose.model('message',MessageSchema)
export default message