import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/usersSchema.js"
import otpService from "../../otpService/otpService.js";
import OtpModel from "../../models/otpSchema.js";
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
            userType: "user",
        })


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
        const user = await User.findOne({ email: email })

        if (!user) return res.status(401).json({ msg: "user does not exist" })
        if (user.isBlocked) return res.status(403).json({ message: "Your account is blocked. Please contact the administrator" })


        if (!user.userType == "user") return res.status(401).json({ msg: "user does not exist" })
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch)
        if (!isMatch) return res.status(400).json({ msg: "invalid credentials" });

        const token = generateToken({id:user._id})

        

        delete user.password;
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

export const sendOtp = async (req, res) => {
    let { phone } = req.body;
    phone = "+91" + phone

    console.log(phone)
    try {
        await otpService.sendOTP(phone);
        res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
        console.error(`Error sending OTP: ${error.message}`);
        res.status(500).json({ error: 'Failed to send OTP' });
    }
}

export const verifyOtp = async (req, res) => {
    let { phone, otp } = req.body;
    phone = "+91" + phone
    try {
        const otpRecord = await OtpModel.findOne({ phone, otp });
        if (otpRecord) {

            await OtpModel.deleteOne({ phone, otp });
            res.status(200).json({ message: 'OTP verified successfully' });
        } else {
            // Invalid OTP
            res.status(400).json({ message: 'Invalid OTP' });
        }
    } catch (error) {
        console.error(`Error verifying OTP: ${error.message}`);
        res.status(500).json({ error: 'Failed to verify OTP' });
    }
}

export const resetPassword = async (req, res) => {
    let { phone, password } = req.body;

    try {

        const user = await User.findOne({ phone: phone })
        if (user) {

            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt)

            user.password = passwordHash;

            await user.save();

            return res.status(200).json({ message: "password reset successful" });

        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error resetting password:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const googleAuth = async (req, res) => {
    console.log(req.body)
    const { given_name, email, picture } = req.body
    try {
        const userExists = await User.findOne({ email: email })
        if (userExists) {

            const payload = {

                id: userExists._id,
                role: "user"

            }

            const token = generateToken(payload)
            console.log(userExists, "raman")
            return res.status(200).json({ status: "ok", userExists, token })
        } else {
            const user = await User.create({
                userName: given_name,
                email: email,
                image: picture,
                userType: "User",
                phone: " "
            })
            const token = generateToken(user._id)
            await user.save()

            return res.status(200).json({ status: "ok", user, token })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ status: "error", error: "Internal Server Error" })
    }
}