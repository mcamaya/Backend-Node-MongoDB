import { obtainAll, obtainOne, insertData, deleteData, updateData } from "./api.js";

addEventListener("DOMContentLoaded", cargarClientes);
const container = document.querySelector('#contenedor-cards')


/* get */
async function cargarClientes() {
    const clientes = await obtainAll();
    console.log(clientes);
    
    clientes.forEach(clt => {
        container.innerHTML += `
        <div class="col">
            <div class="card shadow-sm">
              <div class="card-body d-flex flex-column align-items-center">
                <p class="card-text"> 
                    <strong>Nombre:</strong> ${clt.nombre}
                </p>
                <p class="card-text"> 
                    <strong>Cedula: </strong> ${clt.cedula}
                </p>
                <p class="card-text"> 
                    <strong>Telefono: </strong> ${clt.telefono}
                </p>
                <p class="card-text"> 
                    <strong>Dirección: </strong> ${clt.direccion}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-info update" data-bs-toggle="modal" data-bs-target="#updateModal" idUpdate="${clt._id}">Editar</button>
                    <button type="button" class="btn btn-sm btn-outline-danger delete" idDelete="${clt._id}">Borrar</button>
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
insertModal.addEventListener("submit", insertarCliente);

function insertarCliente(e){
    const nombre = document.querySelector('#nombre').value;
    const cedula = document.querySelector('#cedula').value;
    const telefono = document.querySelector('#telefono').value;
    const direccion = document.querySelector('#direccion').value;


    const nuevoCliente = {
        nombre,
        cedula,
        telefono,
        direccion
    }
    
    insertData(nuevoCliente);
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
    const {_id, nombre, cedula, telefono, direccion} = await obtainOne(idUpdate);
    
    document.querySelector("#idUpdate").value = _id;
    document.querySelector("#nombreUpdate").value = nombre;
    document.querySelector("#cedulaUpdate").value = cedula;
    document.querySelector("#telefonoUpdate").value = telefono;
    document.querySelector("#direccionUpdate").value = direccion;
}

const modalUpdate = document.querySelector("#formularioUpdate");
modalUpdate.addEventListener("submit", actualizarClientes);

function actualizarClientes() {

    const idActualizar = document.querySelector("#idUpdate").value; 
    const newNombre = document.querySelector("#nombreUpdate").value; 
    const newCedula = document.querySelector("#cedulaUpdate").value; 
    const newTelefono = document.querySelector("#telefonoUpdate").value; 
    const newDireccion = document.querySelector("#direccionUpdate").value;

    const clienteActualizado = {
        nombre: newNombre,
        cedula: newCedula,
        telefono: newTelefono,
        direccion: newDireccion
    }

    updateData(idActualizar, clienteActualizado);
}