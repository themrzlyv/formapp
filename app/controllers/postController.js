import Post from '../models/Post.js'
import { postValidator } from '../helpers/ErrorHandler.js'

export const getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find()
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const getSinglePost = async (req,res) => {
    try {
        // get id from request params
        const  {id} = req.params

        const post = await Post.findById({_id: id})
        if(!post) return res.status(400).json({error: "Post can not found!"})

        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const createNewPost = async(req,res) => {
    try {
        //get datas from request
        const {title,category,description,image} = req.body

        // checking post values
        const error = postValidator(title,category,description,image)
        if(error) return res.status(400).json({error: error})

        // creating new post
        const post = await Post({title,category,description,image}).save()

        return res.status(200).json({success: true})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const updatePost = async (req,res) => {
    try {
        const {id} = req.params
        const {title,category, description,image} = req.body
        
        //checking any error
        const error = postValidator(title,category,description,image);
        if(error) return res.status(400).json({error: error});

        const post = await Post.findByIdAndUpdate({_id: id}, {title,category,description,image},
            {
                new: true,
                runValidators: true
            })
        res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const deletePost = async (req,res) => {
    try {
        // get post id from request params
        const {id} = req.params
        const post = await Post.findByIdAndDelete({_id: id})
        res.status(200).json({success: true});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}