import express from "express";
import { register, sendOtp, verifyOtp, login, resetPassword, googleAuth} from "../../controllers/userController/userAuth.js";




const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/sendOtp", sendOtp);
router.post("/verifyOtp", verifyOtp);
router.post("/resetPassword", resetPassword);
router.post("/google",googleAuth)

export default router;