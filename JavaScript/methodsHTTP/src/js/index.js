"use strict;"
import { add, request, deleteRow, modifyRow } from "./apiRequest.js";

const main = document.querySelector("main");
const table = (main.lastElementChild).firstElementChild;
export const tbody = table.lastElementChild;
request();


main.addEventListener("click", async (e)=> {
    let rowID = e.target.parentNode.parentNode.firstElementChild.textContent;
    if(e.target.classList.contains("edit")){
        let newRow = {
            date: new Date(),
            last_name: prompt("Ingrese apellido"),
            first_name: prompt("Ingrese nombre"),
            dni: prompt("Ingrese dni"),
            age: prompt("Ingrese edad"),
            transaction_number: prompt("Ingrese nro de expediente"),
            details: prompt("Ingrese descripcion"),
        }
        await modifyRow(rowID, newRow);
    }else if (e.target.classList.contains("trash")){
        await deleteRow(rowID);
    }else if (e.target.classList.contains("add")){
        let newRow = {
            date: new Date(),
            last_name: prompt("Ingrese apellido"),
            first_name: prompt("Ingrese nombre"),
            dni: prompt("Ingrese dni"),
            age: prompt("Ingrese edad"),
            transaction_number: prompt("Ingrese nro de expediente"),
            details: prompt("Ingrese descripcion"),
        }
        await add(newRow);
    }
    tbody.innerHTML = "";
    await request();
})