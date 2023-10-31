import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "../../models/admin/loginSchema.js"
import Vehicles from "../../models/vehicleSchema.js";
import generateToken from "../../utils/utils.js";

// User register

export const register = async (req, res) => {


    try {
        const {
            userName,
            email,
            password
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)

        const newAdmin = new Admin({
            userName,
            email,
            password: passwordHash,

        })


        const savedAdmin = await newAdmin.save();
        console.log(savedAdmin)
        res.status(201).json(savedAdmin);

    } catch (err) {
        console.log(err.message)
        res.status(500).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        console.log("inside login")
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email: email })

        console.log(admin, "login insde")

        if (!admin) return res.status(401).json({ msg: "user does not exist" })

        const isMatch = await bcrypt.compare(password, admin.password);
        console.log(isMatch)
        if (!isMatch) return res.status(400).json({ msg: "invalid credentials" });


        const adminToken = generateToken({ id: admin._id });
        console.log(adminToken)

        delete admin.password;
        res.status(200).json({ adminToken, admin });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

export const vehicleList = async (req, res) => {

    const vehicle = await Vehicles.find();

    console.log(vehicle, "admin vehicle list")

    res.status(201).json(vehicle);
}

export const approveVehicle = async (req, res) => {
    const { isApproved } = req.body;
    const { id } = req.params;

    try {
        // Find the vehicle by ID
        const vehicle = await Vehicles.findOne({ _id: id });

        if (!vehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }

        // Update the isApproved field
        vehicle.isApproved = isApproved;

        // Save the updated vehicle to the database
        await vehicle.save();

        res.status(200).json({ message: 'Vehicle updated successfully' });
    } catch (error) {
        console.error('Error updating vehicle:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


