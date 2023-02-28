/*Crear tu propio componente
Escribe un componente desde cero. Podes darle cualquier nombre 
valido y retornar cualquier marcado */

export default function Imagen() {
    return (
        <div>
            <img
                src="https://i.ingur.com/lICfvb0.jpg"
                alt="Alan L. Hart"
            />
        </div>
    );
}

export default function TextoCincuenta() {
    return (
        <div>
            <h2>Lorem ipsum dolor</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nam delectus aliquid quae repudiandae cumque et quasi provident</p>
            <button>
                <a href="https://www.google.com"> Buscar</a>
            </button>
        </div>
    );
}

export default function SectionGeneral() {
    return (
        <section>
            <Imagen/>
            <TextoCincuenta/>
        </section>
    );
}
