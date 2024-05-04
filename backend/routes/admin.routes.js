import { Router } from "express";
import { adminLogin, getAdmin } from "../controller/admin.controller.js";


const router = Router()


router.route("/login").post(adminLogin)
router.route("/getadmin").get(getAdmin)

export default router