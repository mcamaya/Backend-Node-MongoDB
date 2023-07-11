import express from "express";
import { getCategorias, postCategorias } from "../controllers/categorias.controllers.js";

const router = express.Router();

router.get("/all", getCategorias);
router.post("/add", postCategorias)

export default router;