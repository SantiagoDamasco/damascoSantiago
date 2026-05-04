//Obtené el array de personajes, ordenalos por edad de menor a mayor y mostrá los datos de los 5 primeros: nombre y edad.

fetch("https://thesimpsonsapi.com/api/characters")
.then (response => response.json())
.then (data => {
    const personajesOrdenados = data.results.sort((a, b) => (a.age || 0) - (b.age || 0));
    const primerosCinco = personajesOrdenados.slice(0, 5);
    const resultado = primerosCinco.map(personajes => `Nombre: ${personajes.name}, Edad: ${personajes.age}`).join("</p>");
    document.getElementById("resultado").innerHTML = resultado;
});
