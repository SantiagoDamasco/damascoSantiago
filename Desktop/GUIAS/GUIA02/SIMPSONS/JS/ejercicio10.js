//Usá reduce para contar cuántos personajes hay de cada género. Mostrá el resultado en pantalla de forma clara, por ejemplo:
// Masculino: X personajes
// Femenino: X personajes

fetch("https://thesimpsonsapi.com/api/characters")
.then (response => response.json())
.then (data => {
    const conteoGenero = data.results.reduce((acc, personaje) => {
        const genero = personaje.gender || "No se sabe";
        acc[genero] = (acc[genero] || 0) + 1;
        return acc;
    }, {});
    
    const resultado = Object.entries(conteoGenero).map(([genero, cantidad]) => `${genero}: ${cantidad} personajes`).join("<br>");
document.getElementById("resultado").innerHTML = resultado;
});
