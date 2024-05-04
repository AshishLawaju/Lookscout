
import { Router } from "express"
import contactRouter from "./contact.routes.js"
import userRouter from "./user.routes.js"

import adminRouter  from "./admin.routes.js"

const mainRouter = Router()

mainRouter.use(contactRouter).use(userRouter).use("/admin",adminRouter)


export default mainRouter