import userModel from "../models/userModel";

const updateUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

const getUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id)
        res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

export { updateUser, deleteUser, getUser }