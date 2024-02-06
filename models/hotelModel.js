import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    distance:{ // şehire olan uzaklık
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    photos:{
        type:[String],
    },
    adress:{
        type: String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5,
    },
    rooms:{
        type:[String],
    },
    featured:{ // otelde bulunan özellikler
        type:Boolean,
        default:false
    },
    price:{
        type:Number,
        required:true
    }

})

export default mongoose.model('Hotels', hotelSchema)