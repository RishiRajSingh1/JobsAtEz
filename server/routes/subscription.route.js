import express from "express";
import subscriptionController from "../controllers/subscription.controller.js"; // Adjust the path accordingly

const router = express.Router();

const subscriptionRoute = router.post("/", subscriptionController); 
export default subscriptionRoute;
