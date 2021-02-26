import Category from "../models/Category.js"

export const getAllCategories = async (req,res) => {
    try {
        const categories = await Category.find()
        return res.status(200).json(categories)
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
        const {title} = req.body
        // creating new post
        const category = await Category({title}).save()
        return res.status(200).json({success: true})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const updateCategory = async (req,res) => {
    try {
        const {id} = req.params
        const {title} = req.body        

        const category = await Category.findByIdAndUpdate({_id: id}, {title},
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
        res.status(200).json({success: true});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}