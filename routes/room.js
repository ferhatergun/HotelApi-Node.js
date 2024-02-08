import { Router } from "express";
import { getRoom ,createRoom,deleteRoom,updateRoom} from "../controlers/roomController.js";
import { adminCheck ,tokenCheck} from "../middleware/auth.js";
const router = Router();

router.get("/:roomId",getRoom)
router.post("/createRoom/:hotelId",tokenCheck,adminCheck,createRoom)
router.delete("/deleteRoom/:hotelId/:roomId",tokenCheck,adminCheck,deleteRoom)
router.put("/updateRoom/:roomId",tokenCheck,adminCheck,updateRoom)



export default router;