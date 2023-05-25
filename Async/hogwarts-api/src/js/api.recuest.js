const urlApi = "https://hp-api.onrender.com/api/characters";

//FUNCIÓN QUE ENVIARÁ LA PETICIÓN
async function getData(){
    return fetch(urlApi); //Devuelve una PROMESA
}

//FUNCIÓN QUE TRAERÁ LOS DATOS
export async function obtenerDatos(){
        let response = await getData(); //Espera y devuelve la promesa
        if(response.ok){ //Si se pudo obtener los datos
            const data = await response.json(); //Espera y obtiene de la RESPONSE el JSON
            return data;
        }else{
            throw new Error("Error al obtener los datos"); //Si no se pudo obtener los datos, lanza un error
        }
}
