import mongoose from 'mongoose';


const PostSchema = new mongoose.Schema({
    title:{
        type:string,
        required: true,
        trim: true,
        maxlength: [36,'Description must be max 65 character']
    },
    category: {
        type: string,
        required: true
    },
    description:{
        type:string,
        required: true,
        maxlength: [65,'Description must be max 65 character']
    },
    image:{
        type: string,
        required: true
    }
}, {timestamps: true})



export default mongoose.models.Post || mongoose.model("Post", PostSchema);