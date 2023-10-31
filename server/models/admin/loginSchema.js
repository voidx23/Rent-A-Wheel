import mongoose from "mongoose";


const LoginSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
   
    password: {
        type: String,
        required: true,
    },
      
    image: {
        type:String,
    },
   
    token: {
        type: String
    },
    
});

const Admin = mongoose.model('Admin', LoginSchema);


export default Admin;