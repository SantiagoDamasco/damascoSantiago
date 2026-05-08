//Filtrá los personajes para quedarte solo con las mujeres (gender === "Female"). 
// Mostrá la cantidad de mujeres encontradas y sus nombres en el HTML.

fetch("https://thesimpsonsapi.com/api/characters")
    .then(response => response.json())
    .then(data => {
        const mujeres = data.results.filter(personaje => personaje.gender === "Female");
        const cantidadMujeres = mujeres.length;
        const nombresMujeres = mujeres.map(personaje => personaje.name).join(", ");
        nuevoresultado.innerHTML = `Cantidad de mujeres: ${cantidadMujeres}. Nombres: ${nombresMujeres}`;
    });