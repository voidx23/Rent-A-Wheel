import mongoose from "mongoose";


async function connectDb() {
   try {
      const db = await mongoose.connect(process.env.MONGO_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true,

      }).then(console.log("connected"))
   } catch (error) {
      console.log(error)

   }

}

export default connectDb


