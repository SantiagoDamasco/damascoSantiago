//Mostrá en pantalla los nombres de los primeros 5 personajes de la API, cada uno en una línea separada
//  (podés usar <p> o <li>). Usá forEach para recorrer el array.

fetch("https://thesimpsonsapi.com/api/characters")
    .then(response => response.json())
    .then(data => {
        const personajes = data.results.slice(0, 5);
        personajes.forEach(personaje => {
            Listaresultado.innerHTML += `<p>${personaje.name}</p>`;
        });
    });