import jwt from "jsonwebtoken";
import User from "../../models/User.js";


export const Auth = async (req,res,next) => {
    try {
        //checking token exist
        const token = req.header('Authorization')
        if(!token) return res.status(403).json({error: "Invalid Authentication"})

        // jwt verify accesstoken
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user) => {
            // if any error 
            if(err) return res.status(400).json({error: "Invalid Authorization"})

            // success token
            req.user = user
            next()
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


export const getAdminAccess = async(req,res,next) => {
    try {
        // get user id from req user
        const user = await User.findById({_id:req.user.id})

        //checking role
        if(user.role === false) 
            return res.status(403).json({error: "Admin resources access denied"})

        next()
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

