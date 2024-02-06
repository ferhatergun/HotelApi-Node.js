import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import connectDB from "./config/db.js";

configDotenv()
const app = express()
connectDB()

app.use(cors())
app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(cookieParser())




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})