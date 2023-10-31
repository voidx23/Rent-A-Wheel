import mongoose from "mongoose";
import Address from './addressSchema.js';
import Booking from './BookingSchema.js'


const UserScehma = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    age: {
        type: Number,
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking'
    },
    image: {
        type: String,
    },
    userType: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    isBlocked: {
        type: Boolean,
        default: false,

    }
});

const Users = mongoose.model('User', UserScehma);


export default Users;