//Del array results, filtrá solo los que tienen status === "Alive". Mostrá la cantidad de vivos encontrada y sus nombres.
//Mostrá: "Personajes vivos en esta página: X" y luego los nombres

fetch("https://rickandmortyapi.com/api/character")
    .then (response => response.json())
    .then (data => {
        const personajesVivos = data.results.filter(personaje => personaje.status === "Alive");
        document.getElementById("resultado").innerHTML = `Personajes vivos en esta paginas: ${personajesVivos.length} <br> Nombres: ${personajesVivos.map(personaje => personaje.name).join(" --- ")}`;
    });