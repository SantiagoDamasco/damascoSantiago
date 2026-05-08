//Usá reduce para agrupar los personajes de results por especie(species).El resultado debe ser un objeto donde cada clave es una especie y el valor es la cantidad.
//Mostrá todas las especies con su conteo.

fetch("https://rickandmortyapi.com/api/character/")
    .then(response => response.json())
    .then(data => {
        const personajes = data.results;
        const especies = personajes.reduce((acumulador, personaje) => {
            const especie = personaje.specie
            if (acumulador[especie]) {
                acumulador[especie]++;
            } else {
                acumulador[especie] = 1;

            }
            return acumulador;
            }
            , {});
        const resultado = document.getElementById("resultado");
        for (const especie in especies) {
            const cantidad = especies[especie];
            const elemento = document.createElement("p");
            elemento.textContent = `${especie}, cantidad: ${cantidad}`;
            resultado.appendChild(elemento);
        }
    });