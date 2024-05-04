import { Router } from "express";
import { getuser, login, signup } from "../controller/user.controller.js";
import { adminLogin } from "../controller/admin.controller.js";



const router = Router()

router.route("/login").post(login)
router.route("/signup").post(signup)
router.route("/getuser").get(getuser)

export default router