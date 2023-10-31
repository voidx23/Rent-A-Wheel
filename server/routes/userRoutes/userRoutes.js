import express, { Router } from "express";
import { fetchVehicle } from "../../controllers/userController/userController.js";
import { vehicleList } from "../../controllers/userController/userController.js";



const router = express.Router();

router.get("/fetchVehicle",fetchVehicle);
router.get("/vehicleDetails",vehicleList);

export default router;