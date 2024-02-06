import hotelModel from '../models/hotelModel.js';
import roomModel from '../models/roomModel.js';

const createHotel = async (req, res) => {
    try {
        const hotel = await hotelModel.create(req.body)
        res.status(201).json({
            success: true,
            message: 'Hotel created successfully',
            data: hotel
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error 
        });
    }
}

const updateHotel = async (req,res) =>{
    const {id} = req.params;
    try {
        const hotel = await hotelModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({
            success: true,
            message: 'Hotel updated successfully',
            data: hotel
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error 
        })
    }
}

const deleteHotel = async (req,res) =>{
    const {id} = req.params;
    try {
        const hotel = await hotelModel.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: 'Hotel deleted successfully',
            data: hotel
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error 
        })
    }
}

const getHotel = async (req,res) =>{
    const {id} = req.params;
    try {
        const hotel = await hotelModel.findById(id)
        if(!hotel){
            return res.status(404).json({
                success: false,
                message: 'Hotel not found'
            })
        }

        res.status(200).json({
            success: true,
            data: hotel
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error 
        })
    }
}

export {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel
}