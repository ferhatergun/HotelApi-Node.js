import hotelModel from '../models/hotelModel.js';
import roomModel from '../models/roomModel.js';

const createRoom = async (req, res) => {
    const hotelId = req.params.hotelId;
    try {
        const room = await roomModel.create(req.body);
        
        await hotelModel.findByIdAndUpdate(hotelId, {
            $push: { rooms: room._id }
        })
        
        res.status(201).json({
            success: true,
            message: 'Room created successfully',
            data: room
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

const updateRoom = async (req, res) => {
    const { roomId } = req.params;
    try {
        const room = await roomModel.findByIdAndUpdate(roomId, req.body,{new:true})
        res.status(200).json({
            success: true,
            message: 'Room updated successfully',
            data: room
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

const deleteRoom = async (req, res) => {
    const { hotelId ,roomId} = req.params;
    try {
        await roomModel.findByIdAndDelete(roomId)
        await hotelModel.findByIdAndUpdate(hotelId,{$pull:{rooms:roomId}})
        
        res.status(200).json({
            success: true,
            message: 'Room deleted successfully'
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

const getRoom = async (req, res) => {
    const { roomId } = req.params;
    try {
        const room = await roomModel.findById(roomId)
        if(!room){
            return res.status(404).json({
                success: false,
                message: 'Room not found'
            })
        }
        res.status(200).json({
            success: true,
            data: room
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }

}

export {
    createRoom,
    updateRoom,
    deleteRoom,
    getRoom
}