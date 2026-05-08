//Mostrá los primeros 8 personajes en tarjetas HTML. Cada tarjeta debe incluir: 
// imagen (portrait_path), nombre, ocupación y edad. Usá estilos inline para darle un aspecto visual básico a las tarjetas.

fetch("https://thesimpsonsapi.com/api/characters")
.then (response => response.json())
.then (data => {
    const primerosOcho = data.results.slice(0, 8);
    const tarjetas = primerosOcho.map(personaje => `
        <div style="border: 1px solid #ccc; padding: 10px; margin: 10px; width: 200px; display: inline-block; text-align: center;">
            <img src="${personaje.portrait_path}" alt="${personaje.name}" style="width: 100%; height: auto;">
            <h3>${personaje.name}</h3>
            <p>${personaje.occupation}</p>
            <p>Edad: ${personaje.age}</p>
        </div>
    `);
    document.getElementById("resultado").innerHTML = tarjetas.join("");
});