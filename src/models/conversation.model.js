import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'message'
        }]
},{timestamps:true})

export default conversation = mongoose.model('conversation',conversationSchema)