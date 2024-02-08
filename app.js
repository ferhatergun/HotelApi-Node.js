import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from './routes/user.js'
import hotelRoutes from './routes/hotel.js'
import roomRoutes from './routes/room.js'
import authRoutes from './routes/auth.js'

configDotenv()
const app = express()
connectDB()

app.use(cors())
app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(cookieParser())

app.use("/user", userRoutes)
app.use("/hotel", hotelRoutes)
app.use("/room", roomRoutes)
app.use("/auth", authRoutes)




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})