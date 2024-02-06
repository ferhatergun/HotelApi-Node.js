import { Router } from "express";
import { getRoom ,createRoom,deleteRoom,updateRoom} from "../controlers/roomController";

const router = Router();

router.get("/:roomId",getRoom)
router.post("/createRoom/:hotelId",createRoom)
router.delete("/deleteRoom/:hotelId/:roomId",deleteRoom)
router.put("/updateRoom/:roomId",updateRoom)



export default router;