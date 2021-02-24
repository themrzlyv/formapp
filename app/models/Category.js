import mongoose from 'mongoose';


const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    about: {
        type:String,
        required: true
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, {timestamps: true});


export default mongoose.models.Category || mongoose.model("Category", CategorySchema);