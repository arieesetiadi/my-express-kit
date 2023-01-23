import express from "express";
import userRoutes from "./user.routes.js";

const router = express.Router();

// Use Routes
router.get("/", (req, res) => res.json("Express /api/v1 ✨"));
router.use("/users", userRoutes);

export default router;
