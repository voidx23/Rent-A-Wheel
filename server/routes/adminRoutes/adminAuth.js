import  express  from "express";
import { login, register, approveVehicle,vehicleList } from '../../controllers/adminController/adminAuth.js'


const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/vehicleList", vehicleList)
router.put("/approveVehicle/:id", approveVehicle)

export default router;