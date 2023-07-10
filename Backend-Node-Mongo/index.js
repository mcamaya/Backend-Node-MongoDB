import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js";

const app = express();
dotenv.config();

const port = process.env.PORT;

conectarDB();

app.listen(port, () => {
    console.log(`Server web listening on port ${port}`);
});

app.use("/categorias", categoriasRouter);