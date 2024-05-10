import express from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
  getGigsByUser,
  searchGigs
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:gigId", getGig);
router.get("/", getGigs);
router.get("/search", searchGigs);
router.get("/owner/:userId", verifyToken, getGigsByUser);


export default router;
