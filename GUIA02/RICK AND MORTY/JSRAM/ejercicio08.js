//Creá un < input > de texto y un botón.Al hacer clic
// hacé un fetch a la API con el parámetro ? name = y mostrá los resultados encontrados en tarjetas con imagen, nombre y status.
//Armá la URL dinámica con template literals

const boton = document.getElementById("boton");
const input = document.getElementById("input");

boton.addEventListener("click", () => {
    const name = input.value;

    fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
        .then(response => response.json())
        .then(data => {
            const resultados = data.results;
            const contenedor = document.getElementById("resultado");
            contenedor.innerHTML = "";

            resultados.forEach(personaje => {
                const tarjeta = document.createElement("div");
                tarjeta.classList.add("tarjeta");
                tarjeta.innerHTML = `
                    <img src="${personaje.image}" alt="${personaje.name}">
                    <h3>${personaje.name}</h3>
                    <p>Status: ${personaje.status}</p>
                `;
                contenedor.appendChild(tarjeta);
            });
        });
});
