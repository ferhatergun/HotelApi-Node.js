import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    maxPersons:{
        type: Number,
        required:true
    },
    roomNumbers:[{
        number:Number,
        unavaliableDates:{
            type:[Date],
        }
    }]
},{timestamps:true})

export default mongoose.model('Rooms', roomSchema)