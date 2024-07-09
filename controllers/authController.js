const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken');

const registerController = async(req,res) => {
    try {   
        const existingUser = await userModel.findOne({email : req.body.email});
        if(existingUser){
            return res.status(200).send({
                success: false,
                message: 'Email already registered'
            })
        }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password , salt);

    req.body.password = hashedPassword;
    const user = new userModel(req.body);
    await user.save();
    return res.status(200).send({
        success: true,
        message: 'user saved successfully',
        user
    })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in register api',
            error
        })
    }
}

const loginController = async(req,res) => {
    try {
        const user = await userModel.findOne({email : req.body.email});
        if(!user){
            return res.status(404).send({
                success:false,
                message: 'User not found'
            })
        }
        if(user.role !== req.body.role){
            return res.status(404).send({
                success:false,
                message: "role does not match",
            })
        }
        const comparePassword = await bcrypt.compare( req.body.password , user.password);
        if(!comparePassword){
            return res.status(500).send({
                success: false,
                message: 'Invalid password'
            })
        }
        const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET, {expiresIn: "1d"});
        return res.status(200).send({
            success: true,
            message: 'Login successful',
            token,
            user,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in login api',
            error
        })
    }
}

const currentUserController = async(req,res) => {
    try {
        const user = await userModel.findOne({_id: req.body.userId});
        return res.status(200).send({
            success: true,
            message: 'User fetched successfully',
            user,
        })
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            success: false,
            message: "error in getting user"
        })
    }
}
module.exports = {registerController , loginController , currentUserController};