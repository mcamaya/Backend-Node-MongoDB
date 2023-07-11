import express from "express";
import { getCategorias, postCategorias, deleteCategoria, updateCategoria, getOneCategoria } from "../controllers/categorias.controllers.js";

const router = express.Router();

router.get("/all", getCategorias);
router.post("/add", postCategorias);
router.delete("/delete/:id", deleteCategoria);
router.patch("/update/:id", updateCategoria);
router.get("/:id", getOneCategoria);

export default router;