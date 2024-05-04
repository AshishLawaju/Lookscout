import { Router } from "express";
import { getAllMessage, sendMessage } from "../controller/contact.controller.js";
import { checkIfAdmin } from "../middleware/checkAdmin.js";


const router = Router()

router.route("/sendmessage").post(sendMessage)
router.route("/getmessage").get( checkIfAdmin,getAllMessage)

export default router