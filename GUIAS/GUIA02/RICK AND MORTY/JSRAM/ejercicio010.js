//Mostrá un resumen completo de los personajes de la primera página.El HTML debe mostrar todos estos datos:
//Total de personajes en la primera página
//Cuántos están vivos, muertos y con estado desconocido(filter para cada uno)
//El personaje con más episodios — nombre y cantidad
//El personaje con menos episodios — nombre y cantidad
//Lista de todas las especies encontradas(sin repetir)

fetch("https://rickandmortyapi.com/api/character")
    .then (response => response.json())
    .then (data => {
        const personajes = data.results;
        const totalPersonajes = personajes.length;
        const vivos = personajes.filter(p => p.status === "Alive").length;
        const muertos = personajes.filter(p => p.status === "dead").length;
        const desconocidos = personajes.filter(p => p.status === "unknown").length;
        const personajesMasEpisodios = personajes.reduce((max,p) => p.episode.length > max.episode.length ? p : max);
        const personajesMenosEpisodios = personajes.reduce((min,p) => p.episode.length < min.episode.length ? p : min);
        const especies = [...new Set(personajes.map(p => p.species))].join(", ");

        document.getElementById("resultado").innerHTML = `
            Total de personajes: ${totalPersonajes} <br>
            Vivos: ${vivos} <br>
            Muertos: ${muertos} <br>
            Estado desconocido: ${desconocidos} <br>
            Personaje con más episodios: ${personajesMasEpisodios.name} - ${personajesMasEpisodios.episode.length} episodios <br>
            Personaje con menos episodios: ${personajesMenosEpisodios.name} - ${personajesMenosEpisodios.episode.length} episodios <br>
            Especies encontradas: ${especies}
        `;
    })