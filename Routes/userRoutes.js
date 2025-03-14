import express from "express";
import { getOne, Register } from "../Controllers/userController.js";

const router = express.Router();

router.post("/", Register).get("/:id", getOne);

export default router;
