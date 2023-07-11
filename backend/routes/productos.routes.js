import express from "express";
import { getProductos, getOneProducto, postProducto, deleteProducto, updateProducto } from "../controllers/productos.controllers.js";

const router = express.Router();

router.get("/all", getProductos);
router.get("/:id", getOneProducto);
router.post("/add", postProducto);
router.delete("/delete/:id", deleteProducto);
router.patch("/update/:id", updateProducto);

export default router;