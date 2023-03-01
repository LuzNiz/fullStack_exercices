/*
Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
Luego de resolverlo, pensar en aprovechar métodos y discutir como representar la información

*/

import "./styles.css";
// Pido al usuario la cant. de alumnos a cargar
let cantidad: number = Number(
	prompt("CANTIDAD DE ALUMNOS", "Ingrese la cantidad de alumnos")
);
let alumnos: string[] = new Array(cantidad); //Creo el array que contendrá los nombres de los alumnos, según la cantidad que dió el usuario
let notas: number[] = new Array(3); //Creo el array que contendrá las 3 notas a promediar ingresadas por el usuario
let sumaNotas: number = 0; //Inicializo la variable que almacenará la suma de las notas
let promedio: number = 0; //Inicializo la variable que contendrá el promedio de cada alumno

function calcularPromedio( //Creo la función que recibirá como parametro la cantidad de alumnos y los arrays alumnos y notas
	cantidad: number,
	alumnos: string[],
	notas: number[]
): any {
	for (let i: number = 0; i < cantidad; i++) {
		//Ejecuto un ciclo for, donde el contador sea menor a la cantidad de alumnos dada por el usuario, incremento contador
		sumaNotas = 0; //Reinicio variable a 0
		alumnos[i] = String(prompt("ALUMNO", "Ingrese el nombre del alumno")); //Pido al usuario el nombre del alumno
		for (let j: number = 0; j < notas.length; j++) {
			//Ejecuto otro ciclo for, donde el  2do contador sea menor que la longitud del arreglo notas, incremento  2do contador
			notas[j] = Number(
				//almaceno la nota proporcionada por el usuario en la posición dada por el contador
				prompt(`NOTAS`, `Ingrese nota ${j + 1} de ${alumnos[i]}`)
			);
			sumaNotas += notas[j]; //Sumo en la variable sumaNotas las notas proporcionada por el usuario
		}
		promedio = sumaNotas / notas.length; //Calculo el promedio con el valor de la suma almacenada dividido la longitud de arreglo notas
		console.log(`El promedio anual de ${alumnos[i]} es: ${promedio}`); //Muestro por consola el promedio de alumno
		alert(`El promedio anual de ${alumnos[i]} es: ${promedio}`); //Le muestro al usuario el promedio del alumno dado en la posición dada por el contador i
	}
}

calcularPromedio(cantidad, alumnos, notas); //Llamo a la función con los parametros correspondientes
