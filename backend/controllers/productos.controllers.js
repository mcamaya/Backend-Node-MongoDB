import Producto from "../models/Producto.js";

const getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
}

const getOneProducto = async (req, res) => {
    const producto = await Producto.find({_id:req.params.id});
    res.json(producto);
}

const postProducto = async (req, res) => {
    try {
        const producto = new Producto(req.body);
        const nuevo = await producto.save();
        res.json(nuevo);
    } catch (err) {
        res.json(err)
    }
}

const deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({_id:req.params.id});
        res.json(204).send();
    } catch (err) {
        res.json(err).send();
    }
}

const updateProducto = async (req, res) => {
    try {
        const producto = await Producto.findOne({_id:req.params.id});
        if(req.body.nombre){
            producto.nombre = req.body.nombre;
        }
        if(req.body.descripcion){
            producto.descripcion = req.body.descripcion;
        }
        if(req.body.proveedor){
            producto.proveedor = req.body.proveedor;
        }
        if(req.body.precio){
            producto.precio = req.body.precio;
        }
        if(req.body.categoria){
            producto.categoria = req.body.categoria;
        }
        if(req.body.stock){
            producto.stock = req.body.stock;
        }
        await producto.save();
        res.send(producto);
    } catch (err) {
        res.json(err).send()
    }
}

export {
    getProductos,
    getOneProducto,
    postProducto,
    deleteProducto,
    updateProducto
}