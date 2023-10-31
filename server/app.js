import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import authRoutes from "./routes/userRoutes/userAuth.js";
import userRoutes from "./routes/userRoutes/userRoutes.js"
import vendorAuthRoutes from "./routes/vendorRoutes/vendorAuth.js";
import adminAuthRoutes from "./routes/adminRoutes/adminAuth.js";
import vendorRoutes from "./routes/vendorRoutes/vendorRoutes.js";
import connectDb from './db/connection.js';


const app = express();
dotenv.config();


//Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDb();

app.use(cors({origin:"http://localhost:3000"}));

app.use(express.json({limit: '10mb'}));

app.use(express.urlencoded({limit: '10mb', extended: true }));
app.use(morgan('combined')); 


app.use("/assets", express.static(path.join(__dirname, 'public/assets')));



//mongoose setup



//user routes
app.use("/auth", authRoutes);
app.use("/api/user", userRoutes);


//vendor Routes
app.use("/auth/vendor", vendorAuthRoutes);
app.use("/vendor",vendorRoutes);


app.use("/auth/admin",adminAuthRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
//port setup
const port = process.env.PORT || 8800;

app.listen(port, () => {
    console.log('listening on port' + port);
});
