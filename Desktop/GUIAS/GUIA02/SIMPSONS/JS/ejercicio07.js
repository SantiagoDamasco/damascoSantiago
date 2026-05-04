//Creá un <input> donde el usuario ingrese una ocupación y un botón que al presionarse verifique si existe algún personaje con esa ocupación en el array. 
// Mostrá "✅ Sí, existe un personaje con esa ocupación" o "❌ No se encontró ninguno".

const inputOcupacion = document.getElementById("inputOcupacion");
const buttonOcupacion = document.getElementById("buscarOcupacion");
const resultadoOcupacion = document.getElementById("resultadoOcupacion");

buttonOcupacion.addEventListener("click", () => {
    const ocupacionBuscada = inputOcupacion.value.toLowerCase();
    fetch("https://thesimpsonsapi.com/api/characters")
        .then(response => response.json())
        .then(data => {
            const personajes = data.results;
            const existeOcupacion = personajes.some(personaje => personaje.occupation.toLowerCase() === ocupacionBuscada);
            if (existeOcupacion) {
                resultadoOcupacion.innerHTML = "✅ Sí, existe un personaje con esa ocupación";
            } else {
                resultadoOcupacion.innerHTML = "❌ No se encontró ninguno";
            }
        }

        )
});
