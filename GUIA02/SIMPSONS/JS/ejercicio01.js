//acé un fetch() a la API de los Simpsons. 
// Cuando lleguen los datos, mostrá en el HTML únicamente el nombre del primer personaje del array.



const resultado = document.getElementById("resultado")

fetch("https://thesimpsonsapi.com/api/characters")
    .then(response => response.json())
    .then(data => {
        resultado.innerHTML = data.results[0].name;
    });