import mongoose from "mongoose";

const empleadoSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    cedula: {
        type: Number,
        trim: true,
        required: true
    },
    eps: {
        type: String,
        trim: true,
        required: true
    },
    sueldoMensual: {
        type: Number,
        trim: true,
        required: true
    },
    cargo: {
        type: String,
        trim: true,
        required: true
    }
},
{
    timestamps: true
});

const Empleado = mongoose.model("empleados", empleadoSchema);
export default Empleado;