import express from 'express';
import { createHotel ,deleteHotel ,getHotel ,updateHotel } from '../controlers/hotelController';

const router = express.Router()

router.post("/createHotel",createHotel)
router.delete("/deleteHotel/:id",deleteHotel)
router.put("/updateHotel/:id",updateHotel)
router.get("/:id",getHotel)
 


export default router;