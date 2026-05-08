//Mostrá en pantalla el nombre y la ocupación de todos los personajes de la primera página. 
// El formato de cada línea debe ser: "Homer Simpson — Safety Inspector"

fetch("https://thesimpsonsapi.com/api/characters")
    .then(response => response.json())
    .then(data => {
        const personajes = data.results;
        personajes.forEach(personaje => {
            ocupacionresultado.innerHTML += `<p>${personaje.name} — ${personaje.occupation}</p>`;
        });
    })