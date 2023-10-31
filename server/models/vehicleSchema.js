import mongoose from "mongoose";

const VehicleSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    make:{
        type:String,
        required:true,
    },
    transmission:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    fuel:{
        type:String,
        required:true,
    },
    milege:{
        type:String,
        required:true,
    },
    seating:{
        type:String,
        required:true,
    },
    brake:{
        type:String,
        required:true,
    },
    engine:{
        type:String,
        required:true,
    },
    rate:{
        type:String,
        required:true,
    },
    registration:{
        type:String,
        required:true,
    },
    image:{
        type:String,
       
    },
    city:{
        type:String,
        required:true
    },
    isApproved:{
        type: String,
        default: "Not approved"
    },
    isBlocked:{
        type: Boolean,
        default:false
    },
    avalability:{
        type:Boolean,
        default:true
    },
    vendor_id:{
        type:String,
        require:true
    },
    vendor_name:{
        type:String,
        required:true
    },
    

    
});

const Vehicles = mongoose.model('Vehicle', VehicleSchema);

export default Vehicles;