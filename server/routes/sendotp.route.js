import express from "express";
import { sendOpt } from "../controllers/sendotp.controller.js";

const router=express.Router();

router.post("/",sendOpt);
export default router;