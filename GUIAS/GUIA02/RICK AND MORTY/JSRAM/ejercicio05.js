//Creá un < input type = "number" > y un botón.Al hacer clic, hacé un fetch a la URL del personaje 
//Con ese ID y mostrá su nombre, estado e imagen.

fetch("https://rickandmortyapi.com/api/character/")
    .then (response => response.json())
    .then (data => {
        const input = document.getElementById("inputID");
        const boton = document.getElementById("boton");

        boton.addEventListener("click", () => {
            const id = input.value;
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then (response => response.json())
                .then (personaje => {
                    document.getElementById("resultado").innerHTML = `Nombre: ${personaje.name} <br> Estado: ${personaje.status} <br> <img src="${personaje.image}" alt="${personaje.name}">`;
                })
        })
    }
);