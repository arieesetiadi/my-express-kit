import express from "express";

const router = express.Router();

// Get users
router.get("/", (req, res) => res.json("Express /api/v1/users 👦"));

export default router;
