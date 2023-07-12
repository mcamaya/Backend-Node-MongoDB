import { getEmpleados, getOneEmpleado, postEmpleado, deleteEmpleado, updateEmpleado } from "../controllers/empleados.controllers.js";
import express from "express";

const router = express.Router();

router.get("/all", getEmpleados);
router.get("/:id", getOneEmpleado);
router.post("/add", postEmpleado);
router.delete("/delete/:id", deleteEmpleado);
router.patch("/update", updateEmpleado);

export default router;