import User from "../../models/usersSchema.js"
import Vehicles from "../../models/vehicleSchema.js";



export const addVehicle = async (req, res) => {

    try{

        const { vehicleData, vendor } = req.body
        const { name, body, make, transmission, year, fuel, milege, seating, city, brake, engine, rate, registration, image } = vehicleData
        const { _id, userName } = vendor
    
        const newVehicle = new Vehicles ({
            name,
            body,
            make,
            transmission,
            year,
            fuel,
            city,
            milege,
            seating,
            brake,
            engine,
            rate,
            registration,
            image,
            vendor_id:_id,
            vendor_name:userName,
        });
    
        const savedVehicle = await newVehicle.save();
        console.log(savedVehicle)
        res.status(201).json(savedVehicle);

    }catch (err) {
        console.log(err.message)
        res.status(500).json({ error: err.message });
    }

}

export const vehicleList = async (req,res)=>{
    try{
        const {id} = req.params;
        console.log(req.params,"parahd")
        const vehicle = await Vehicles.find({vendor_id:id});
        console.log(vehicle,"ghhfjg")
        res.status(201).json(vehicle)

    }catch (err) {
        console.log(err.message)
        res.status(500).json({ error: err.message });
    }
}