import Categoria from "../models/ Categoria.js";

const getCategorias = async (req, res) => {
    const dbCategorias = await Categoria.find();
    res.json(dbCategorias);
}

export {
    getCategorias
}
