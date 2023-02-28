//Detectar el error

function profile() {  //Falta exportar el componente raiz (export default), y el nombre de la función no comienza con Mayúscula
    return (
        <img
            src="https://i.ingur.com/lICfvb0.jpg"
            alt="Alan L. Hart"
        />
    );
}

let App = function Gallery() { //El nombre de la variable debe estar en minúscula y falta exportar el componente
    return (
        <section>
            <h1>Amazing scrientists</h1>
            <profile /> 
            <profile />
            <profile />
        </section>
    ); //La llamada al componente es erronea, porque el nombre del componente debería comenzar con mayúscula
}

//CÓDIGO ARREGLADO

export default function Profile() { 
    return (
        <img
            src="https://i.ingur.com/lICfvb0.jpg"
            alt="Alan L. Hart"
        />
    );
}

export default function Gallery() { 
    return (
        <section>
            <h1>Amazing scrientists</h1>
            <Profile /> 
            <Profile />
            <Profile />
        </section>
    ); 
}