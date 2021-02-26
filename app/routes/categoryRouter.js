import express from 'express'
import { getAllCategories, getSingleCategory , createCategory, updateCategory, deleteCategory} from '../controllers/categoryController.js'
import { Auth, getAdminAccess } from '../helpers/middlewares/Authorization.js'

const categoryRouter = express.Router()

categoryRouter.get("/", getAllCategories)
categoryRouter.get("/:id",Auth,getAdminAccess, getSingleCategory)
categoryRouter.post("/",Auth,getAdminAccess, createCategory)
categoryRouter.put("/:id",Auth,getAdminAccess, updateCategory)
categoryRouter.delete("/:id",Auth,getAdminAccess, deleteCategory)


export default categoryRouter