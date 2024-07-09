const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    inventoryType: {
        type: String,
        required: [true, "this is required field"],
        enum: ["in" , "out"],
    },
    bloodGroup:{
        type: String,
        required: [true, "this is required field"],
        enum: ["A+" , "A-" , "B+" , "B-" , "O+" , "O-" , "AB+" , "AB-"],
    },
    quantity:{
        type: Number,
        required: [true, "this is required field"],
    },
    organization:{          //relational data.
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "this is required field"],
    },
    hospital:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: function(){
            return this.inventoryType === 'out'
        },
    },
    donar: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required: function(){
            return this.inventoryType === 'in';
        },
    },
},
{timestamps: true}
)

module.exports = mongoose.model("Inventory" , inventorySchema);

