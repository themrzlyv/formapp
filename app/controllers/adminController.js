import User from "../models/User.js"

export const getAllUsers = async (req,res) => {
    try {
        const users = await User.find().select('-password')
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const changeRole = async (req,res) => {
    try {
        // get id from params
        const {id} = req.params

        //get user from db
        const user = await User.findById(id)

        //chekin user exist
        if(!user) return res.status(403).json({error: "User can not found"})

        // change user role 
        user.role = !user.role

        // save user 
        await user.save()
        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const deleteUser = async (req,res) => {
    try {
        // get id from params
        const {id} = req.params

        //get user from db
        const user = await User.findById(id)

        //chekin user exist
        if(!user) return res.status(403).json({error: "User can not found"})

        if(user.role === true) return res.status(400).json({error: "Admin can not deleted!"})

        // delete user 
        await user.remove()
        return res.status(200).json({success: true})

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}