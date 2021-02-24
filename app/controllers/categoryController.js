import Category from "../models/Category.js"
import Post from "../models/Post.js"

export const getAllCategories = async (req,res) => {
    try {
        const categories = await Category.find()
        return res.status(200).json(categories)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const getPostsFromSingleCategory = async (req,res) => {
    try {
        const {id} = req.params

        const category = await Category.findById({_id: id}).populate('posts')
        if(!category) return res.status(400).json({error: "Category can not found!"})

        return res.status(200).json(category.posts)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const getSingleCategory = async (req,res) => {
    try {
        const {id} = req.params

        const category = await Category.findById({_id: id})
        if(!category) return res.status(400).json({error: "Category can not found!"})

        return res.status(200).json(category)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const createCategory = async (req,res) => {
    try {
        //get datas from request
        const {name,about} = req.body
        // creating new post
        const category = await Category({name,about}).save()
        return res.status(200).json({success: true})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const updateCategory = async (req,res) => {
    try {
        const {id} = req.params
        const {name,about} = req.body        

        const category = await Category.findByIdAndUpdate({_id: id}, {name,about},
            {
                new: true,
                runValidators: true
            })
        res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const deleteCategory = async (req,res) => {
    try {
        const {id} = req.params
        const category = await Category.findByIdAndDelete({_id: id})

        await Post.deleteMany({category: id})
        res.status(200).json({success: true});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}