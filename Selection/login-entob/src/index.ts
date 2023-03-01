/*
Desarrolle un algoritmo que permita loguearse a un sistema, ingresando
un nombre de usuario y la contraseña adecuada.
Considerar que tanto el usuario como la contraseña están formados sólo por letras.
El sistema deberá validar que el usuario y la contrasela sean correctas, comparándolas 
con lo que el sistema tiene registrado para ese usuario. Tenga en cuenta que
el sistema tiene registrado el usuario : Juan y la clave: claveJuan
*/

//Almaceno el usuario correcto en una variable
const userSystem: string = "Juan";
//Almaceno la contraseña correcta en una variable
const passwordSystem: string = "claveJuan";
//Capturo el input del usuario del HTML
const userInput = document.getElementById("userInput");
//Capturo el input de la contraseña del HTML
const passwordInput = document.getElementById("passwordInput");
//Capturo el botón de acceder del HTML
const btn = document.getElementById("btn");
//Declaro la variable que almacena el valor de usuario
let userLog: string;
//Declaro la variable que almacena el valor de contraseña
let passwordLog: string;

//Escucho que se haga click en el botón de acceder y ejecuto la función
btn.addEventListener("click", (e) => {
	//Asigno el valor del input usuario a la variable creada userLog
	userLog = userInput.value;
	//Asigno el valor del input contraseña a la variable creada passwordLog
	passwordLog = passwordInput.value;
	//Pregunto si el usuario y contraseña ingresados son correctos
	if (userLog === userSystem && passwordLog === passwordSystem) {
		//Si es true le muestro al usuario Puede Ingresar
		alert("Puede Ingresar");
	} else {
		//En cambio, si es false le muestro al usuario que el usuario y contraseña son incorrectos
		alert("El usuario y la contraseña son incorrectos");
	}
});
