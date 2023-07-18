import { obtainAll, insertData, updateData, obtainOne, deleteData } from "./api.js";

addEventListener("DOMContentLoaded", cargarEmpleados);
const container = document.querySelector('#contenedor-cards')


/* get */
async function cargarEmpleados() {
    const empleados = await obtainAll();
    console.log(empleados);
    
    empleados.forEach(emp => {
        container.innerHTML += `
        <div class="col">
            <div class="card shadow-sm">
              <div class="card-body d-flex flex-column align-items-center">
                <p class="card-text"> 
                    <strong>Nombre:</strong> ${emp.nombre}
                </p>
                <p class="card-text"> 
                    <strong>Cedula: </strong> ${emp.cedula}
                </p>
                <p class="card-text"> 
                    <strong>EPS: </strong> ${emp.eps}
                </p>
                <p class="card-text"> 
                    <strong>Sueldo Mensual: </strong> ${emp.sueldoMensual}
                </p>
                <p class="card-text"> 
                    <strong>Cargo: </strong> ${emp.cargo}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-info update" data-bs-toggle="modal" data-bs-target="#updateModal" idUpdate="${emp._id}">Editar</button>
                    <button type="button" class="btn btn-sm btn-outline-danger delete" idDelete="${emp._id}">Borrar</button>
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
insertModal.addEventListener("submit", insertarEmpleado);

function insertarEmpleado(e){
    const nombre = document.querySelector('#nombre').value;
    const cedula = document.querySelector('#cedula').value;
    const sueldoMensual = document.querySelector('#eps').value;
    const eps = document.querySelector('#sueldoMensual').value;
    const cargo = document.querySelector('#cargo').value;


    const nuevoEmpleado = {
        nombre,
        cedula,
        sueldoMensual,
        eps,
        cargo
    }
    
    insertData(nuevoEmpleado);
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
    const {_id, nombre, cedula, eps, sueldoMensual, cargo} = await obtainOne(idUpdate);
    
    document.querySelector("#idUpdate").value = _id;
    document.querySelector("#nombreUpdate").value = nombre;
    document.querySelector("#cedulaUpdate").value = cedula;
    document.querySelector("#epsUpdate").value = eps;
    document.querySelector("#sueldoMensualUpdate").value = sueldoMensual;
    document.querySelector("#cargoUpdate").value = cargo;
}

const modalUpdate = document.querySelector("#formularioUpdate");
modalUpdate.addEventListener("submit", actualizarEmpleado);

function actualizarEmpleado(e) {
    e.preventDefault();
    const idActualizar = document.querySelector("#idUpdate").value; 
    const newNombre = document.querySelector("#nombreUpdate").value; 
    const newCedula = document.querySelector("#cedulaUpdate").value; 
    const newEPS = document.querySelector("#epsUpdate").value; 
    const newSueldo = document.querySelector("#sueldoMensualUpdate").value;
    const newCargo = document.querySelector("#cargoUpdate").value;

    const empleadoActualizado = {
        nombre: newNombre,
        cedula: newCedula,
        eps: newEPS,
        sueldoMensual: newSueldo,
        cargo: newCargo
    }

    console.log(updateData(idActualizar, empleadoActualizado));
}