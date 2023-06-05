"use strict";
//URL sin errores
const URL_API_USERS = 'https://jsonplaceholder.typicode.com/users';

//URL con error
//const URL_API_USERS = 'htps://jsonplaceholder.typicode.com/users';

async function requestApi(url){
    return fetch(url);
}

async function getUsersData(){
    try{
        let response = await requestApi(URL_API_USERS);
        if(response.ok){
            let data = await response.json();
            return data;
        }else {
            throw new Error();
        }
    }catch(err){
        console.log("Error al obtener los datos del usuario. Error: " + err.message);
    }
}

getUsersData()
.then(data => {
    if(data !== undefined) {
        data.forEach(ob => {
            console.log(ob.name);
        });
    }else{
        throw new Error();
}}).catch(
    err => console.log("Se ha producido un error: " + err)
)


