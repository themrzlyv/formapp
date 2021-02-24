import express from 'express'
import { createNewPost, deletePost, getAllPosts, updatePost, getSinglePost } from '../controllers/postController.js'
import { Auth, getAdminAccess } from '../helpers/middlewares/Authorization.js'

const postRouter = express.Router()

postRouter.get("/", getAllPosts)
postRouter.get("/:id", getSinglePost)
postRouter.post("/",Auth,getAdminAccess, createNewPost)
postRouter.put("/:id",Auth,getAdminAccess, updatePost)
postRouter.delete("/:id",Auth,getAdminAccess, deletePost)


export default postRouter