import twilio from 'twilio';
import dotenv from 'dotenv';
import otpSchema from '../models/otpSchema.js'

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

function sendOTP(phone) {
    const otp = generateOTP();

    const otpDocument = new otpSchema({ phone, otp });

    // Here, you might want to associate the OTP with the user's phone number

    return Promise.all([
        otpDocument.save(),
        client.messages.create({
            body: `Your OTP is: ${otp}`,
            from: '+17273590081',
            to: phone
        })
    ]);
}

export default {
    generateOTP,
    sendOTP
};
