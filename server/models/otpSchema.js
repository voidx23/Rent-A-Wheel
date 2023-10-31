import mongoose from "mongoose";

const otpSchema = mongoose.Schema({
    phone: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
});

const OtpModel = mongoose.model('Otp', otpSchema);

export default OtpModel;