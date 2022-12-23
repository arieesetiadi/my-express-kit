import express from "express";
import userRoutes from "./user.routes.js";

const router = express.Router();

// Starter route
router.get("/", (req, res) => res.json("My Express Kit ⭐"));

// Use another routes
router.use("/users", userRoutes);

export default router;
