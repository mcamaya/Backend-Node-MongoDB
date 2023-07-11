import express from "express";
import { getCategorias, postCategorias, deleteCategoria } from "../controllers/categorias.controllers.js";

const router = express.Router();

router.get("/all", getCategorias);
router.post("/add", postCategorias);
router.delete("/delete/:id", deleteCategoria);

export default router;