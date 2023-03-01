/*Este ejemplo interactivo no funciona porque el componente raíz no 
está exportado: (Intenta arreglarlo)*/

export default function Profile(){ //Para que funcione argrego export default antes de la palabra reservada function
    return (
        <img
            src="https://i.ingur.com/lICfvb0.jpg"
            alt="Aklilu Lemma"
        />
    );
}