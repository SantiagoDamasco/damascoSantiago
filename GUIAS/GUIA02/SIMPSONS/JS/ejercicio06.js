//Creá un <input> de texto y un <button>. Al hacer clic, buscá en el array el personaje cuyo nombre coincida con lo que escribió el usuario.
//  Mostrá su nombre, ocupación y edad. Si no se encuentra, mostrá "Personaje no encontrado".

const input = document.getElementById("inputPersonaje");
const button = document.getElementById("buscarButton");
const resultadoBusqueda = document.getElementById("resultadoBusqueda");

button.addEventListener("click", () => {
    const nombreBuscado = input.value.toLowerCase();
    fetch("https://thesimpsonsapi.com/api/characters")
        .then(response => response.json())
        .then(data => {
            const personajes = data.results;
            const personajeEncontrado = personajes.find(personaje => personaje.name.toLowerCase() === nombreBuscado);
            if (personajeEncontrado) {
                resultadoBusqueda.innerHTML = `Nombre: ${personajeEncontrado.name}, Ocupación: ${personajeEncontrado.occupation}, Edad: ${personajeEncontrado.age}`;
            } else {
                resultadoBusqueda.innerHTML = "Personaje no encontrado";
            }
        });
});