import express from "express";
import { addVehicle, vehicleList } from "../../controllers/vendorController/vehicleController.js";

const router = express.Router();


router.post("/addVehicle", addVehicle)
router.get("/vehicleList/:id", vehicleList)

export default router;

