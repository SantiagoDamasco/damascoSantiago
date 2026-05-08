//Encontrá el personaje con la mayor edad del array y mostrá su nombre y edad en pantalla.
fetch("https://thesimpsonsapi.com/api/characters")
    .then(response => response.json())
    .then(data => {
        const personajes = data.results;
        const personajeMayorEdad = personajes.reduce((mayor, personaje) => {
            return personaje.age > mayor.age ? personaje : mayor;
        }, personajes[0]);
        resultado05.innerHTML = `El personaje de mayor edad es ${personajeMayorEdad.name} con ${personajeMayorEdad.age} años.`;
    }
    )