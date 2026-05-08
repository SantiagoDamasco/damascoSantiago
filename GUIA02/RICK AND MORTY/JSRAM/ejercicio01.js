//Del array results, filtrá solo los que tienen status === "Alive". Mostrá la cantidad de vivos encontrada y sus nombres.

fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
        const aliveCharacters = data.results.filter(character => character.status === "Alive");
       document.getElementById("resultado").innerHTML = `<p>Cantidad de vivos encontrados: ${aliveCharacters.length}</p>`;
        document.getElementById("resultado").innerHTML += "<p>Nombres de los vivos encontrados:</p><ul>" + aliveCharacters.map(character => `<li>${character.name}</li>`).join("") + "</ul>";

    });