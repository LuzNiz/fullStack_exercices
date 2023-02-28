/*Arregla la sentencia de retorno
• Este return no se ve muy bien, lo podes arreglar?*/

//OPCION 1: Coloco la línea de HTML en la misma línea que el return

export default function Profile(){ 
    return <img src="https://i.ingur.com/lICfvb0.jpg"alt="Aklilu Lemma"/>
}

//OPCION 2: Coloco la línea de HTML entre parentesis

export default function Profile(){ 
    return (
        <img src="https://i.ingur.com/lICfvb0.jpg"alt="Aklilu Lemma"/>
    );
}