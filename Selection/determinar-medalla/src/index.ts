/*
Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla a entregar;
Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo puesto medalla de plata y tercer puesto
medalla de bronce. En caso que quede en otra posición se entrega certificado de participación.
*/

//Le pido al usuario que ingrese la posición
let positioningresed: number = Number(prompt("Ingrese la posición"));

//Ejecuto un Switch que se basara en el dato ingresado por el usuario
switch (positioningresed) {
  case 1: //En el caso de que ingrese 1
    console.log("Medalla de oro"); //Muestro por consola que recibirá medalla de oro
    alert("Medalla de oro"); // Le muestro al usuario que recibirá medalla de oro
    break;
  case 2: //En el caso de que ingrese 2
    console.log("Medalla de plata"); //Muestro por consola que recibirá medalla de plata
    alert("Medalla de plata"); // Le muestro al usuario que recibirá medalla de plata
    break;
  case 3: //En el caso de que ingrese 3
    console.log("Medalla de bronce"); //Muestro por consola que recibirá medalla de bronce
    alert("Medalla de bronce"); // Le muestro al usuario que recibirá medalla de plata
    break;
  default:
    // En el caso de que ingrese cualquier numero que no sean los otros casos
    console.log("Certificado de participación"); //Muestro por consola que recibirá un certificado de participación
    alert("Certificado de participación"); // Le muestro al usuario que recibirá certificado de participación
}
