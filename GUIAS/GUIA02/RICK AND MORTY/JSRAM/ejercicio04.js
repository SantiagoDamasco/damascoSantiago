//Filtrá los personajes de results que tengan species === "Human". Mostrá sus nombres y especie.
//Mostrá tambien cuantos personajes humanos hay en total

fetch("https://rickandmortyapi.com/api/character")
    .then (response => response.json())
    .then (data => {
        const personajesHumanos = data.results.filter(personaje => personaje.species === "Human");
        document.getElementById("resultado").innerHTML = `Personajes humanos en esta paginas: ${personajesHumanos.length} <br> Nombres: ${personajesHumanos.map(personaje => personaje.name).join(" --- ")}`;

    });