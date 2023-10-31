import mongoose from "mongoose";

const BookingSchema = mongoose.Schema({
   carId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Vehicle'
   },
   customerId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
   },
   startDate:{
      type:Date,
      required:true
   },
   endDate:{
      type:Date,
      required:true
   },
   totalPrice:{
      type:Number,
      required:true
   },
   status:{
      type:String,
      default:"active"
   },
});

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;
