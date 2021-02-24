import  mongoose  from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    password: {
        type:String,
        required:true,
        trim:true
    },
    role: {
        type: Boolean,
        default: false
    },
    github_username: {
        type: String,
        required: true
    },
    github: {
        type: String,
        default: ""
    },
    about: {
        type: String,
        default: "No any infroamtion"
    }
}, {timestamps: true})

export default mongoose.models.User || mongoose.model("User" , UserSchema);