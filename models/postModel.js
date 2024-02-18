import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    slug: {
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    author: {
        type: String,
        required:true,
        trim:true,
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        required:true
    },
    content: {
        type: String,
        required:true
    }
},{
    timestamps:true
})

export default mongoose.model("posts",PostSchema)