import { getData } from "./api.recuest.js";

const containerStudents = document.getElementById("cards-students");
const containerStaff = document.getElementById("cards-staff");

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

getData()
.then( // Cuando tenga los datos, ejecuto la siguiente función
    data => {
        console.log(data.slice(0,15))
        data.slice(0, 11).forEach(element => {
            if(element.hogwartsStudent){
                let card = createCards(element.image, element.name, element.house, element.dateOfBirth, element.ancestry);
                containerStudents.appendChild(card);
            }if(element.hogwartsStaff){
                let card = createCards(element.image, element.name, element.house, element.dateOfBirth, element.ancestry);
                containerStaff.appendChild(card)
            }
        });
    }
)
.catch( //Si hay un error, lo atrapo y muestro por consola
    err => console.log("Se ha producido un error: " + err)
)

