import Empleado from "../models/Empleado.js";

const getEmpleados = async (req, res) => {
    const empleadosDB = await Empleado.find();
    res.json(empleadosDB);
}

const getOneEmpleado = async (req, res) => {
    const empleadoDB = await Empleado.findOne({_id:req.params.id});
    res.json(empleadoDB);
}

const postEmpleado = async (req, res) => {
    try {
        const empleado = new Empleado(req.body);
        const nuevo = await empleado.save();
        res.json(nuevo);
    } catch (error) {
        res.json(error).send();
    }
}

const deleteEmpleado = async (req, res) => {
    try {
        await Empleado.deleteOne({_id:req.params.id});
        res.json(204).send();
    } catch (error) {
        res.json(error).send();
    }
}

const updateEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.findOne({_id: req.params.id});

        if(req.body.nombre){
            empleado.nombre = req.body.nombre;
        }
        if(req.body.cedula){
            empleado.cedula = req.body.cedula;
        }
        if(req.body.eps){
            empleado.eps = req.body.eps;
        }
        if(req.body.sueldoMensual){
            empleado.sueldoMensual = req.body.sueldoMensual;
        }
        if(req.body.cargo){
            empleado.cargo = req.body.cargo;
        }

        await empleado.save();
        res.json(empleado);
    } catch (error) {
        res.json(error).send();
    }
}

export {
    getEmpleados,
    getOneEmpleado,
    postEmpleado,
    deleteEmpleado,
    updateEmpleado
}