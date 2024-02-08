import { getUser ,deleteUser ,updateUser } from "../controlers/userController.js";
import { Router } from "express";
import { tokenCheck } from "../middleware/auth.js";

const router = Router();

router
    .get("/:id", getUser)
    .put("/:id", tokenCheck, updateUser)
    .delete("/:id", tokenCheck,deleteUser);



export default router;