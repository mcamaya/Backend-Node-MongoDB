import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema(

{
    imagen: {
        type: String,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    }
}, 

{
    timestamps: true // Automatizar la creación de llaves de creación y actualización
}

);

const Categoria = mongoose.model("Categoria", categoriaSchema);

export default Categoria;