import express from 'express'
import adminRouter from './admin.js';
import postRouter from './postRouter.js';
import userRouter from './userRouter.js';
import categoryRouter from './categoryRouter.js'

const routes = express.Router();

routes.use("/user" , userRouter)
routes.use("/admin", adminRouter)
routes.use("/post", postRouter)
routes.use("/category", categoryRouter)

export default routes