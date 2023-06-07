import { tbody } from "./index.js";
import {createRows} from "./functions.js";
const urlApi = "https://647f88d9c246f166da90e403.mockapi.io/procedures/";


export async function add(newRow){
        fetch(urlApi, {
            method: 'POST',
            body: JSON.stringify(newRow),
            headers: {'Content-Type': 'application/json'},
        })
}

export async function deleteRow( id){
        fetch((urlApi + id), {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                console.log('Registro modificado exitosamente');
            } else {
                throw new Error('Error al modificar el registro');
            }
            })
            .catch(error => {
                console.error(error);
                let row = document.createElement('tr');
                row.innerHTML = '<p>Ocurrió un error, no se pudo procesar la demanda</p>';
                tbody.appendChild(row);
            })
    }


export async function modifyRow(id, obj){
    fetch(urlApi + id, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
        if (response.ok) {
            console.log('Registro modificado exitosamente');
        } else {
            throw new Error('Error al modificar el registro');
        }
        })
        .catch(error => {
            console.error(error);
            let row = document.createElement('tr');
            row.innerHTML = '<p>Ocurrió un error, no se pudo procesar la demanda</p>';
            tbody.appendChild(row);
        })
}

export async function request(){
    try{
        fetch(urlApi)
        .then(response =>  response.json())
        .then(data => {
            console.log(data)
            data.forEach(element => {
                let record = createRows(element.id, element.date, element.last_name,
                    element.first_name, element.dni, element.age,
                    element.transaction_number, element.details);
                tbody.appendChild(record);
        })})
        .catch(err => console.log(err))
    }catch(err){
        console.log("No se puedieron traer los datos");
    }
}