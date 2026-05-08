//Mostrá el nombre y el estado(status) de los primeros 5 personajes del array results. Formato: "Rick Sanchez — Alive"

fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
        const primerosCinco = data.results.slice(0, 5);
        const resultado = primerosCinco.map(character => `${character.name} - ${character.status}`).join("<br>");
        document.getElementById("resultado").innerHTML = resultado;
    })