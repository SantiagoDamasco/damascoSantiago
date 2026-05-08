//Usá every para verificar si todos los personajes de results tienen una imagen (image distinto de cadena vacía).
// Mostrá el resultado con un mensaje claro. Mostrá: "✅ Todos los personajes tienen imagen" o "⚠️ Hay personajes sin imagen"

fetch("https://rickandmortyapi.com/api/character")
    .then (response => response.json())
    .then (data => {
        const todosTienenImagen = data.results.every(personaje => personaje.image !== "");
        const mensaje = todosTienenImagen ? " Todos los personajes tienen imagen" : " Hay personajes sin imagen";
        document.getElementById("resultado").innerHTML = `${mensaje}`;
    });