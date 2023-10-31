import Vehicles from "../../models/vehicleSchema.js";


export const fetchVehicle = async (req, res) => {

    try {

        const { city } = req.query;
        const vehicle = await Vehicles.find({ city: city });

        res.status(201).json(vehicle);

    } catch (error) {

    }




}

export const vehicleList = async (req, res) => {
    console.log("call came");
    try {
        const { carId } = req.query;
        console.log(carId,"this is vehicleId");
        const vehicle = await Vehicles.find({ _id: carId });
        res.status(201).json(vehicle);
    }
    catch (error) {
        console.log(error)
    }
}