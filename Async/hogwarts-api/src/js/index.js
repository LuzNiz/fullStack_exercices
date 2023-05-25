import { obtenerDatos } from "./api.recuest.js";

const contenedorStudents = document.getElementById("cards-students");
const contenedorStaff = document.getElementById("cards-staff");

function createCards(urlImg, name, house, dateBirth, ancestry ) {
    const card = document.createElement("div");
    card.classList.add('card');
    card.innerHTML= `
        <img src="${urlImg}" alt="${name}">
        <div class="text">
        <h5> ${name}</h5>
        <p> ${house}</p>
        <p> Date of birth: ${dateBirth}</p>
        <p> Ancestry: ${ancestry}</p>
        </div>
    `;
    return card;
}

obtenerDatos()
.then( // Cuando tenga los datos, ejecuto la siguiente función
    datos => {
        console.log(datos.slice(0,15))
        datos.slice(0, 11).forEach(element => {
            if(element.hogwartsStudent){
                let card = createCards(element.image, element.name, element.house, element.dateOfBirth, element.ancestry);
                contenedorStudents.appendChild(card);
            }if(element.hogwartsStaff){
                let card = createCards(element.image, element.name, element.house, element.dateOfBirth, element.ancestry);
                contenedorStaff.appendChild(card)
            }
        });
    }
)
.catch( //Si hay un error, lo atrapo y muestro por consola
    err => console.log("Se ha producido un error: " + err)
)

