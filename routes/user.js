import { getUser ,deleteUser ,updateUser } from "../controlers/userController";
import { Router } from "express";

const router = Router();

router
    .get("/:id", getUser)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser);



export default router;