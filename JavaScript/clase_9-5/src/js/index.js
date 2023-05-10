import data from "./data.js";
console.log(data);

let dataJson = JSON.parse(data);
let contenedor = document.getElementById("cards-container");
console.log(dataJson);

function createElement(name, picture, address){
    const card = document.createElement('div');
    card.classList.add("card");
    card.innerHTML =`
    <h2>${name}</h2>
    <img src= ${picture} alt= ${name}>
    <h3>${address}</h3>
    `;
    return card;
}

dataJson.map(function(obj){
    let name = `${obj.name.first} ${obj.name.last}`;
    let img = obj.picture.medium;
    let location = `${obj.location.street.name} ${obj.location.street.number}`
    let newCard = createElement(name, img, location);
    contenedor.appendChild(newCard);
})



