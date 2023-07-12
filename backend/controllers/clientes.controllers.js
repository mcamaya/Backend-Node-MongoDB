import Cliente from "../models/Clientes.js";

const getClientes = async (req, res) => {
    const clientes = await Cliente.find();
    res.json(clientes);
}

const getOneCliente = async (req, res) => {
    const cliente = await Cliente.find({_id: req.params.id});
    res.json(cliente);
}

const postClientes = async (req, res) => {
    try {
        const cliente = new Cliente(req.body);
        const nuevo = await cliente.save();
        res.json(nuevo);
    } catch (err) {
        res.json(err).send();
    }
}

const deleteCliente = async (req, res) => {
    try {
        await Cliente.deleteOne({_id: req.params.id});
        res.json(204).send();
    } catch (err) {
        res.json(err).send();
    }
}

const updateCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findOne({_id: req.params.id});

        if(req.body.nombre){
            cliente.nombre = req.body.nombre;
        }
        if(req.body.cedula){
            cliente.cedula = req.body.cedula;
        }
        if(req.body.telefono){
            cliente.telefono = req.body.telefono;
        }
        if(req.body.direccion){
            cliente.direccion = req.body.direccion;
        }

        await cliente.save();
        res.json(cliente);
    } catch (err) {
        
    }
}

export {
    getClientes,
    getOneCliente,
    postClientes,
    deleteCliente,
    updateCliente
}