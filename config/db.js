import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connect(process.env.DB_URL)
    .then(()=>console.log('DB Connected'))
    .catch((err)=>console.log(err))
    console.log(process.env.DB_URL)
}

export default connectDB