import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { regValidator, loginValidator } from '../helpers/ErrorHandler.js'
import { createAccessToken, createRefreshToken } from '../helpers/GenerateToken.js'
import User from '../models/User.js'

export const register = async (req,res) => {
    try {
        const {name,email,password,github_username,github,about} = req.body

        // validate data from user
        const msg = regValidator(name,email,password,github_username)
        if(msg) return res.status(400).json({error: msg})

        // if user exists already
        const user = await User.findOne({email})
        if(user) return res.status(400).json({error: "This user is already exists"})

        // password hashing and creating new user
        const passwordhash = await bcrypt.hash(password,12)
        const newuser = await User({
            name,
            email,
            password: passwordhash,
            github_username,
            github,
            about
        }).save()
        
        // Jwt generate
        const accesstoken = createAccessToken({id: newuser._id})
        const refreshtoken = createRefreshToken({id: newuser._id})

        // set new cookie
        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            maxAge: 7*24*60*60*1000 
        })

        res.status(200).json(accesstoken)

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const login = async (req,res) => {
    try {
        const {email,password} = req.body

        // validate data from user
        const msg = loginValidator(email,password)
        if(msg) return res.status(400).json({error: msg})

        // if user exists already
        const user = await User.findOne({email})
        if(!user) return res.status(400).json({error: "This user is already exists"})

        // control user password
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({error: "Password is not valid"})

        // If login success , create access token and refresh token
        const accesstoken = createAccessToken({id: user._id})
        const refreshtoken = createRefreshToken({id: user._id})

        // set new token to cookie
        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            maxAge: 7*24*60*60*1000 
        })

        res.json(accesstoken)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const refreshToken = async (req,res) => {
    try {
        // checking cookie for tokens
        const ref_token = req.cookies.refreshtoken
        if(!ref_token) return res.status(400).json({error: "Please Login or Register"})

        // jwt verify token
        jwt.verify(ref_token, process.env.REFRESH_TOKEN_SECRET, (err,user) => {
            // if any error 
            if(err) return res.status(400).json({error: "Please Login or Register"})

            //success token
            const accesstoken = createAccessToken({id: user.id})
            res.json(accesstoken)
        })

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const getInfo = async (req,res) => {
    try {
        // getting data without password
        const user = await User.findById(req.user.id).select('-password')

        //if user doesnt exist
        if(!user) return res.status(400).json({error: "User does not exist."})

        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const updateInfo = async (req,res) => {
    try {
        // getting data from request body
        const {name,email,github_username,github,about} = req.body

        // getting data without password
        const user = await User.findByIdAndUpdate(req.user.id,{name,email,about,github_username,github},
            {
                new: true,
                runValidators: true
            }).select('-password')

        //if user doesnt exist
        if(!user) return res.status(400).json({error: "User does not exist."})

        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const logout = async (req,res) => {
    try {
        // clearing cookie
        res.clearCookie('refreshtoken')
        return res.json({message: "Logged out"})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}