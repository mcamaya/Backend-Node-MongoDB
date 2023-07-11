import Categoria from "../models/ Categoria.js";

const getCategorias = async (req, res) => {
    const dbCategorias = await Categoria.find();
    res.json(dbCategorias);
}

const getOneCategoria = async (req, res) => {
    const unicaCategoria = await Categoria.find({_id:req.params.id});
    res.json(unicaCategoria);
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

const deleteCategoria = async (req, res) => {
    try {
        await Categoria.deleteOne({_id: req.params.id});
        res.json(204).send()
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
}

const updateCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findOne({_id:req.params.id});

        if (req.body.imagen) {
            categoria.imagen = req.body.imagen;
        }

        if(req.body.nombre) {
            categoria.nombre = req.body.nombre;
        }

        if(req.body.descripcion){
            categoria.descripcion = req.body.descripcion;
        }

        await categoria.save();
        res.send(categoria);
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
}

export {
    getCategorias,
    getOneCategoria,
    postCategorias,
    deleteCategoria,
    updateCategoria
}
