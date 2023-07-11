import Categoria from "../models/ Categoria.js";

const getCategorias = async (req, res) => {
    const dbCategorias = await Categoria.find();
    res.json(dbCategorias);
}

const postCategorias = async (req, res) => {
    const categoria = new Categoria(req.body);
    try {
        const nuevaCategoria = await categoria.save();
        res.json(nuevaCategoria);
    } catch (error) {
        console.error(error);
    }
}

export {
    getCategorias,
    postCategorias
}
