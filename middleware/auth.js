import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';


const tokenCheck = async (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token not found"
            })
        }
        jwt.verify(token,process.env.JWT_SECRET_KEY,async (err,decode)=>{
            if(err){
                return res.status(401).json({
                    success:false,
                    message:"Invalid Token"
                })
            } 
            const userInfo = await userModel.findById(decode.userId)
            if(!userInfo) return res.status(401).json({
                success:false,
                message:"Invalid Token"
            })
            req.user = userInfo
            next()
        })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `buradasin ${error}`
        })
    }
}

const adminCheck = async (req,res,next) => {
    try {
        if(req.user.isAdmin){
            next()
        }else{
            return res.status(403).json({
                success:false,
                message:"Forbidden"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

export { tokenCheck, adminCheck } 