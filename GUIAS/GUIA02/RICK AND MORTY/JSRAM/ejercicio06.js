//Cada personaje tiene una propiedad episode que es un array de URLs. Obtené los personajes de results
//ordenalos de mayor a menor según la cantidad de episodios en los que aparecen. Mostrá nombre y cantidad de episodios.
fetch("https://rickandmortyapi.com/api/character")
    .then (response => response.json())
    .then (data => {
        const personajesEpisodios = data.results.map(personaje => ({
            name: personaje.name,
            episodeCount: personaje.episode.length
        }));

        personajesEpisodios.sort((a, b) => b.episodeCount - a.episodeCount);

        const resultado = personajesEpisodios.map(p => `${p.name} - ${p.episodeCount} episodios`).join("<brd>");

        document.getElementById("resultado").innerHTML = `${resultado}`;
        })
    
        