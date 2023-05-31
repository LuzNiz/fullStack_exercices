"use strict";
const contenedorCalculadora = document.getElementById("calculator");
const btn = contenedorCalculadora.lastElementChild;
const visor = (contenedorCalculadora.firstElementChild).lastElementChild;
const visorAux = (contenedorCalculadora.firstElementChild).firstElementChild;

let numeros = [];
let operador = null;


function calcular (operador){
    if(operador === "+"){
        result = calc(numeros, add);
    }else if(operador === "-"){
        result = calc(numeros, subtract);
    }else if(operador === "*"){
        result = calc(numeros, multiply);
    }else {
        result = calc(numeros,split);
    }
    return result;
}

function calc(array, cb) {
    let resultado = array[0];
    for (let i = 1; i < array.length; i++) {
    resultado = cb(resultado, array[i]);
    }
    return resultado;
}

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const split = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2;

function clear() {
    visor.innerHTML = "";
}

btn.addEventListener("click", (e) => {
    const contenido = e.target.textContent;
    if (e.target.nodeName === "TD") {
        if (contenido === "C") {
            visor.innerHTML = "0";
            visorAux.innerHTML = "";
            numeros = [];
            operador = null;
        } else if (contenido === "+" || contenido === "-" || contenido === "*" || contenido === "/") {
            if (numeros.length === 0) {
                const num = parseFloat(visor.textContent);
                numeros.push(num);
                operador = contenido;
                visorAux.innerHTML = num.toString() + contenido;
                clear();
        } else if (numeros.length === 1 && operador !== null) {
            const num = parseFloat(visor.textContent);
            numeros.push(num);
            let result = calcular(operador);
            visorAux.innerHTML += num.toString() + "=";
            visor.innerHTML = result.toString();
            numeros = [result];
        }
        } else if (contenido === "=") {
            if (numeros.length === 1 && operador !== null) {
            const num = parseFloat(visor.textContent);
            numeros.push(num);
            const result = calc(numeros, operador === "+" ? add : operador === "-" ? subtract : operador === "*" ? multiply : split);
            visorAux.innerHTML += num.toString() + "=";
            visor.innerHTML = result.toString();
            numeros = [];
            operador = null;
            }
        } else {
            if (visor.textContent === "0") {
                visor.innerHTML = contenido;
            } else {
                visor.innerHTML += contenido;
            }
        }
    }
});