import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
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
    telefono: {
        type: Number,
        trim: true,
        required: true
    },
    direccion: {
        type: String,
        trim: true,
        required: true
    }
},
{
    timestamps: true
});

const Cliente = mongoose.model("clientes", clienteSchema);

export default Cliente;

