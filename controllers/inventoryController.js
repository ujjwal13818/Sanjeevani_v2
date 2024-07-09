const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");


const inventoryController = async(req,res) => {
    try {
        const {email , inventoryType} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'User not found',
            })
        }
        if(inventoryType === 'in' && user.role !== 'donar'){
           throw new Error('Not a donar account');
        }
        if(inventoryType === 'out' && user.role!== 'hospital'){
            throw new Error('Not a hospital account');
        }

        const inventory = new inventoryModel(req.body);
        await inventory.save();
        return res.status(200).send({
            success: true,
            message: 'new record added',
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in fetching inventory',
            error,
        })
    }
}

const getInventoryController = async(req,res) => {
    try {
        const inventory = await inventoryModel.find({organization: req.body.userId}).populate("donar").populate("hospital").sort({createdAt: -1});
        return res.status(200).send({
            success: true,
            message: 'Inventory fetched successfully',
            inventory,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in fetching inventory',
            error,
        })
    }
}


module.exports = {inventoryController , getInventoryController};