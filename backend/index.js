import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js";
import productosRouter from "./routes/productos.routes.js";
import clientesRouter from "./routes/clientes.routes.js";
import empleadosRouter from "./routes/empleados.routes.js";

const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();

const port = process.env.PORT;

conectarDB();

app.listen(port, () => {
    console.log(`Server web listening on port ${port}`);
});

app.use("/categorias", categoriasRouter);
app.use("/productos", productosRouter);
app.use("/clientes", clientesRouter);
app.use("/empleados", empleadosRouter);