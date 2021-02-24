import express from 'express'
import { changeRole, deleteUser, getAllUsers } from '../controllers/adminController.js'
import { Auth, getAdminAccess } from '../helpers/middlewares/Authorization.js'


const adminRouter = express.Router()

adminRouter.use([Auth,getAdminAccess])

// change role
// delete user
adminRouter.get("/users", getAllUsers)
adminRouter.get("/changeRole/:id",changeRole)
adminRouter.delete("/delete/:id",deleteUser)


export default adminRouter