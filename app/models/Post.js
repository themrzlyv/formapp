import mongoose from 'mongoose';


const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        trim: true,
        maxlength: [36,'Description must be max 65 character']
    },
    category: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required: true,
        maxlength: [65,'Description must be max 65 character']
    },
    image:{
        type: String,
        required: true
    }
}, {timestamps: true})



export default mongoose.models.Post || mongoose.model("Post", PostSchema);