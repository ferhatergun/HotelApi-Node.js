import express from 'express';
import { createHotel ,deleteHotel ,getHotel ,updateHotel } from '../controlers/hotelController.js';
import { adminCheck ,tokenCheck } from '../middleware/auth.js';

const router = express.Router()

router.post("/createHotel",tokenCheck,adminCheck,createHotel)
router.delete("/deleteHotel/:id",tokenCheck,adminCheck,deleteHotel)
router.put("/updateHotel/:id",tokenCheck,adminCheck,updateHotel)
router.get("/:id",getHotel)
 


export default router;