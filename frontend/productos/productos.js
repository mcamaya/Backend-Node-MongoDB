import { obtainAll, obtainOne, insertData, deleteData, updateData } from "./api.js";

addEventListener("DOMContentLoaded", cargarProductos);
const container = document.querySelector('#contenedor-cards')


/* get */
async function cargarProductos() {
    const productos = await obtainAll();
    console.log(productos);
    
    productos.forEach(prd => {
        container.innerHTML += `
        <div class="col">
            <div class="card shadow-sm">
              <div class="card-body d-flex flex-column align-items-center">
                <p class="card-text"> 
                    <strong>Nombre:</strong> ${prd.nombre}
                </p>
                <p class="card-text"> 
                    <strong>Descripción: </strong>
                </p>
                <p class="card-text"> 
                    ${prd.descripcion}
                </p>
                <p class="card-text"> 
                    <strong>Proveedor: </strong> ${prd.proveedor}
                </p>
                <p class="card-text"> 
                    <strong>Precio: </strong> ${prd.precio}
                </p>
                <p class="card-text"> 
                    <strong>Categoría: </strong> ${prd.categoria}
                </p>
                <p class="card-text"> 
                    <strong>Stock: </strong> ${prd.stock}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-info update" data-bs-toggle="modal" data-bs-target="#updateModal" idUpdate="${prd._id}">Editar</button>
                    <button type="button" class="btn btn-sm btn-outline-danger delete" idDelete="${prd._id}">Borrar</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        `
    });
}

/* post */
const insertModal = document.querySelector('#formulario');
insertModal.addEventListener("submit", insertarProducto);

function insertarProducto(e){
    const nombre = document.querySelector('#nombre').value;
    const descripcion = document.querySelector('#descripcion').value;
    const proveedor = document.querySelector('#proveedor').value;
    const categoria = document.querySelector('#categoria').value;
    const precio = document.querySelector('#precio').value;
    const stock = document.querySelector('#stock').value;


    const nuevoProducto = {
        nombre,
        descripcion,
        proveedor,
        precio,
        categoria,
        stock
    }
    
    insertData(nuevoProducto);
}

/* delete */
container.addEventListener("click", borrarEditar)

function borrarEditar(e) {
    if(e.target.classList.contains("delete")){
        borrarClientes(e)
    }
    if(e.target.classList.contains("update")){
        modalActualizar(e)
    }
}

function borrarClientes(e){
    const idBorrar = e.target.getAttribute("idDelete");
        const confirmar = confirm("¿Seguro desea eliminar este registro?");
        if (confirmar) {
            deleteData(idBorrar);
            document.location.reload();
        }
}

/* update */

async function modalActualizar(e) {
    const idUpdate = e.target.getAttribute("idUpdate")
    console.log(await obtainOne(idUpdate));
    const {_id, nombre, descripcion, proveedor, precio, stock, categoria} = await obtainOne(idUpdate);
    console.log(_id, nombre);
    
    document.querySelector("#idUpdate").value = _id;
    document.querySelector("#nombreUpdate").value = nombre;
    document.querySelector("#descripcionUpdate").value = descripcion;
    document.querySelector("#proveedorUpdate").value = proveedor;
    document.querySelector("#precioUpdate").value = precio;
    document.querySelector("#categoriaUpdate").value = categoria;
    document.querySelector("#stockUpdate").value = stock;
}

const modalUpdate = document.querySelector("#formularioUpdate");
modalUpdate.addEventListener("submit", actualizarProductos);

function actualizarProductos() {

    const idActualizar = document.querySelector("#idUpdate").value; 
    const newNombre = document.querySelector("#nombreUpdate").value; 
    const newDescripcion = document.querySelector("#descripcionUpdate").value; 
    const newProveedor = document.querySelector("#proveedorUpdate").value; 
    const newPrecio = document.querySelector("#precioUpdate").value;
    const newCategoria = document.querySelector("#categoriaUpdate").value;
    const newStock = document.querySelector("#stockUpdate").value;

    const productoActualizado = {
        nombre: newNombre,
        descripcion: newDescripcion,
        proveedor: newProveedor,
        precio: newPrecio,
        categoria: newCategoria,
        stock: newStock
    }

    updateData(idActualizar, productoActualizado);
}