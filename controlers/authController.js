import userModel from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";

const register = async (req, res) => {
    const {username,email,password}=req.body;
    try {
        const user = await userModel.findOne({email})
        if(user){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }
        const hashedPassword = await bcryptjs.hash(password, 12)
        const newUser = new userModel({
            ...req.body,
            password:hashedPassword
        })
        await newUser.save()
        res.status(201).json({
            success:true,
            message:"User created successfully",
            newUser
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

const login = async (req, res) => {
    const {email,password}=req.body;
    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"user not found"
            })
        }
        const isMatch = await bcryptjs.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"password is incorrect"
            })
        }
        const payload={
            userId:user._id,
            isAdmin:user.isAdmin
        }
        const token = Jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn:"1d"})
        res.status(200).json({
            success:true,
            message:"login success",
            user,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

export {register,login}