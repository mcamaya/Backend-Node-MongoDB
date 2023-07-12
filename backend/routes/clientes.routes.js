import express from "express";
import { getClientes, getOneCliente, postClientes, deleteCliente, updateCliente } from "../controllers/clientes.controllers.js";

const router = express.Router();

router.get("/all", getClientes);
router.get("/:id", getOneCliente);
router.post("/add", postClientes);
router.delete("/delete/:id", deleteCliente);
router.patch("/update/:id", updateCliente);

export default router;