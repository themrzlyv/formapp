import express from 'express'
import { getInfo, login, logout, refreshToken, register, updateInfo } from '../controllers/userController.js';
import { Auth } from '../helpers/middlewares/Authorization.js';

const userRouter = express.Router();

// User registration and login 
userRouter.post("/register" , register)
userRouter.post("/login" , login)
userRouter.get("/refresh_token" , refreshToken)
userRouter.get("/profile" ,Auth, getInfo)
userRouter.put("/profile" ,Auth, updateInfo)
userRouter.get("/logout" , logout)



export default userRouter