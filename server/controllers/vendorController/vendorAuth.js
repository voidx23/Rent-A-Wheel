import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/usersSchema.js"
import Vehicles from "../../models/vehicleSchema.js";
import generateToken from "../../utils/utils.js";

// User register

export const register = async (req, res) => {


    try {
        const {
            userName,
            email,
            phone,
            password
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            userName,
            email,
            phone,
            password: passwordHash,
            userType: "vendor",
        });


        const savedUser = await newUser.save();
        console.log(savedUser)
        res.status(201).json(savedUser);

    } catch (err) {
        console.log(err.message)
        res.status(500).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const vendor = await User.findOne({ email: email })

        if (!vendor) return res.status(401).json({ msg: "user does not exist" })
        if (vendor.isBlocked) return res.status(403).json({ message: "Your account is blocked. Please contact the administrator" })

        if (!vendor.userType == "vendor") return res.status(401).json({ msg: "user does not exist" })
        const isMatch = await bcrypt.compare(password, vendor.password);

        if (!isMatch) return res.status(400).json({ msg: "invalid credentials" });


        const vendorToken = generateToken({ id: vendor._id });
        console.log(vendorToken, "vendor token")

        delete vendor.password;
        res.status(200).json({ vendorToken, vendor });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};


