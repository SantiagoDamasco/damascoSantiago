// l hacer click en el botón, mostrar un alert con el texto "¡Hola, mundo!". Es el primer ejercicio con onclick : el botón llama a
// una función que vos definís en fn.js.Elegí el nombre que quieras.

function saludo() {
    alert("Hola Mundo!");
}

//El usuario escribe su nombre en un input. Al hacer click, mostrar en el párrafo "¡Hola, [nombre]!". Si el input está vacío, mostrar
//"Por favor ingresá tu nombre."

function saludarNombre() {
        let nombre = document.getElementById( "nombre").value;
        if (nombre === "") {
            alert("Por favor ingresá tu nombre.");
        } else {
            alert("Hola " + nombre + "!");
        }

    }

//El usuario escribe algo en un input. Al hacer click, mostrar el tipo de dato con typeof y si es un número válido usando isNaN() .
//Ejemplo: "Tipo: string — Es un número válido" o "Tipo: string — No es un número".

function mostrarTipoYNumero() {
    let valor = document.getElementById("valor").value;
    let tipo = typeof valor;
    let esNumero = isNaN(valor) ? "No es un número" : "Es un número";
    document.getElementById("resultado").innerText = `Tipo: ${tipo} — ${esNumero}`;
}

//Al hacer click, calcular la operación 25 × 4 − 10 y mostrar el resultado usando console.log() . Abrí las DevTools con F12 →
//pestaña Console para verlo. Además mostrá el resultado en el párrafo de la página

function sumarconsole() {
    let resultado = 25 * 4 - 10;
    console.log(resultado);
    document.getElementById("resultado").innerText = `El resultado es: ${resultado}`;
}

//Dos inputs numéricos y un botón. Mostrar la suma en el párrafo. Importante: convertir los valores con Number() antes de operar,
//si no la suma se convierte en concatenación de strings.Si algún campo está vacío, mostrar un mensaje de error.

function suma5() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if (num1 === "" || num2 === "") {
        alert("Por favor, completá ambos campos.");
    } else {
        let resultado = Number(num1) + Number(num2);
        document.getElementById("resultado").innerText = `La suma es: ${resultado}`;
    }
}

//Dos inputs y un botón. Mostrar la resta e indicar si el resultado es positivo, negativo o cero. Ejemplo de salida: "Resultado: -3
//(negativo)" o "Resultado: 0(cero)"

function resta() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = Number(num1) - Number(num2);
    let tipoResultado = resultado > 0 ? "positivo" : resultado < 0 ? "negativo" : "cero";
        document.getElementById("resultado").innerText = `Resultado: ${resultado} (${tipoResultado})`;

}

//Dos inputs y un botón. Mostrar el producto en el párrafo. Además, usar 5 líneas de console.log para imprimir la "tabla" del primer
//número del 1 al 5 sin usar bucles.Ejemplo si n1 es 3: 3×1 = 3, 3×2 = 6, 3×3 = 9, 3×4 = 12, 3×5 = 15

function imprimir() { 
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let producto = Number(num1) * Number(num2);
    document.getElementById("resultado").innerText = `El producto es: ${producto}`;
    console.log(`${num1} x 1 = ${num1 * 1}`);
    console.log(`${num1} x 2 = ${num1 * 2}`);
    console.log(`${num1} x 3 = ${num1 * 3}`);
    console.log(`${num1} x 4 = ${num1 * 4}`);
    console.log(`${num1} x 5 = ${num1 * 5}`);
}

//Dos inputs y un botón. Si el divisor es 0, mostrar "Error: no se puede dividir por cero." Si no, mostrar el resultado con 2
//decimales usando.toFixed(2).

function division() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if (Number(num2) === 0) {
        alert("Error: no se puede dividir por cero.");
    } else {
        let resultado = Number(num1) / Number(num2);
        document.getElementById("resultado").innerText = `El resultado es: ${resultado.toFixed(2)}`;
    }
}

//Un input numérico y un botón. Indicar si el número ingresado es positivo, negativo o cero

function numero() {
    let num = Number(document.getElementById("num").value);
    let tipoNumero = num > 0 ? "positivo" : num < 0 ? "negativo" : "cero";
    document.getElementById("resultado").innerText = `El número es: ${tipoNumero}`;
}

//Un input y un botón. Decir si el número es par o impar. Si el usuario ingresa un número con decimales, mostrar: "Ingresá un
//número entero."

function par() {
    let num = document.getElementById("num").value;
    if (num.includes(".")) {
        alert("ingresa un numero entero");
    } else {
        let esPar = Number(num) % 2 === 0 ? "par" : "impart";
        document.getElementById("resultado").innerText = `El número es: ${esPar}`;
    }
}

//Dos inputs: nombre y edad. Mostrar "[nombre] es mayor de edad." o "[nombre] es menor de edad, le faltan X años." Si la
//edad es negativa o mayor a 120, mostrar un mensaje de error.

function edad() {
    let nombre = document.getElementById("nombre").value;
    let edad = Number(document.getElementById("edad").value);
    if (edad < 0 || edad > 120) {
        alert ("edad no valida");
    } 
    else if (edad >= 18) {
        document.getElementById("resultado").innerText = `${nombre} es mayor de edad.`;
    } else {
        let menoredad = 18 - edad;
        document.getElementById("resultado").innerText = `${nombre} es menor de edad, le faltan ${menoredad} anios.`;   
    }
}

//Dos inputs y un botón. Mostrar cuál de los dos es mayor, o si son iguales. Ejemplo: "El mayor es: 15" o "Los dos números son
//iguales."

function mayor() {
    let num1 = Number(document.getElementById("n1").value);
    let num2 = Number(document.getElementById("n2").value);
    if (num1 > num2) {
        document.getElementById('resultado').innerText = `El mayor es: ${num1}`;
    } else if (num2 > num1) {
        document.getElementById('resultado').innerText = `El mayor es: ${num2}`;
    } else {
        document.getElementById('resultado').innerText = "Los dos números son iguales.";
    }
}

//Dos inputs: base y altura (ambos deben ser positivos). Calcular y mostrar el área (base × altura) y el perímetro (2 × (base +
//altura)). Si algún valor es ≤ 0, mostrar error.

function area() {
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);
    if (base <= 0 || altura <= 0) {
        alert("Error: base y altura deben ser positivos.");
    } else {
        let area = base * altura;
        let perimetro = 2 * (base + altura);
        document.getElementById("resultado").innerText = `area: ${area} - perimetro: ${perimetro}`;
    }
}

//Un input con temperatura en Celsius. Mostrar el equivalente en Fahrenheit ( C × 9/5 + 32 ) y en Kelvin ( C + 273.15 ), ambos
//con 2 decimales.Si la temperatura es menor a −273.15°C, mostrar error(cero absoluto).

function convertirTemperatura() {
    let celsius = Number(document.getElementById("celsius").value);
    if (celsius < -273.15) {
        alert("Error: la temperatura no puede ser menor a -273.15 °C.");
    } else {
        let fahrenheit = (celsius * 9 / 5) + 32;
        let kelvin = celsius + 273.15;
        document.getElementById("resultado").innerText = `faherenheit: ${fahrenheit.toFixed(2)} - kelvin: ${kelvin.toFixed(2)}`;
    }
}

//Dos inputs: monto de la cuenta y porcentaje de propina (ej: 10, 15, 20). Mostrar el monto de la propina y el total a pagar, ambos
//con 2 decimales.Si el porcentaje es negativo o mayor a 100, mostrar error.

function propina() {
    let cuenta = Number(document.getElementById("monto").value);
    let porcentaje = Number(document.getElementById("porcentaje").value);
    if (porcentaje < 0 || porcentaje > 100) {
        alert("Error: el porcentaje de propina debe ser entre 0 y 100.");
    } else {
        let propina = cuenta * (porcentaje / 100);
        let total = cuenta + propina;
        document.getElementById("resultado").innerText = `Propina: ${propina.toFixed(2)} - Total a pagar: ${total.toFixed(2)}`;
    }
}

//Tres inputs: mínimo, máximo y un número a evaluar. Indicar si el número está dentro del rango [min, max], es menor al mínimo o
//es mayor al máximo.Validar también que el mínimo sea menor que el máximo.

function evaluar() {
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    let num = Number(document.getElementById("num").value);
    if (min >= max) {
        alert("Error: el minimo debe ser menor que el maximo.");
    } else if (num < min) {
        document.getElementById("resultado").innerText = "El numero es menor al minimo.";
    } else if (num > max) {
        document.getElementById("resultado").innerText = "El numero es mayor al maximo.";
    } else {
        document.getElementById("resultado").innerText = "El numero esta dentro del rango.";

    }
}

//Dos inputs numéricos y un <select> con cuatro opciones: suma, resta, multiplicación, división. Al hacer click, ejecutar la
//operación seleccionada. Controlar la división por cero.

function calcularSwitch() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado;
    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multi":
            resultado = num1 * num2;
            break;
        case "div":
            if (num2 === 0) {
                alert("Error: no se puede dividir por cero.");
                return;
            } else {
                resultado = num1 / num2;

            }
    }
    document.getElementById("resultado").innerText = `El resultado es: ${resultado}`;
}

//Dos inputs: precio y porcentaje de descuento. Mostrar el precio final y el monto ahorrado. Además mostrar una etiqueta según el
//descuento: 0 % → "Sin descuento", 1–30 % → "Oferta", más de 30 % → "¡Mega oferta!"

function descuento() {
    let precio = Number(document.getElementById("precio").value);
    let porcentaje = Number(document.getElementById("descuento").value);
    let montoDescuento = precio * (porcentaje / 100);
    let precioFinal = precio - montoDescuento;
    let etiqueta;
    if (porcentaje === 0) {
        etiqueta = "sin descuento";
    } else if (porcentaje > 0 && porcentaje <= 30) {
        etiqueta = "oferta";
    } else if (porcentaje > 30) {
        etiqueta = "mega oferta";
    }
    document.getElementById("resultado").innerText = `precio final: ${precioFinal.toFixed(2)} - monto ahorrado: ${montoDescuento.toFixed(2)} - etiqueta: ${etiqueta}`;
}

//Un input con un año. Determinar si es bisiesto. Un año es bisiesto si: es divisible por 4 y (no es divisible por 100 o sí es divisible por
//400). Probá con 2000(bisiesto), 1900(no) y 2024(bisiesto)

function bisiesto() {
    let anio = Number(document.getElementById("anio").value);
    let esBisiesto = (anio % 4 === 0) && (anio % 100 !== 0 || anio % 400 === 0) ? "es bisiesto" : "no es bisiesto";
    document.getElementById("resultado").innerText = `El año ${anio} ${esBisiesto}.`;
}

//Un input de precio y un checkbox "Incluir IVA (21%)". Si está marcado, mostrar el precio con IVA. Si no, mostrar el precio sin
//cambios.Indicar claramente en el resultado si el IVA fue aplicado o no

function calcularIVA() {
    let precio = Number(document.getElementById("precio").value);
    let incluirIVA = document.getElementById("conIva").checked ? "con IVA" : "sin IVA";
    let precioFinal = incluirIVA === "con IVA" ? precio * 1.21 : precio;
    document.getElementById("resultado").innerText = `Precio ${incluirIVA}: ${precioFinal.toFixed(2)}`;

}

//Un input con una cantidad de segundos (ej: 3725). Mostrar el equivalente en formato H horas, M minutos y S segundos. Si el
//número es negativo, mostrar error.Probá con 3725 → debe dar 1h 2m 5s.

function segundos() {
    let totalSegundos = Number(document.getElementById("segundos").value);
    if (totalSegundos < 0) {
        alert("Error: la cantidad de segundos no puede ser negativa.");
    } else {
        let horas = Math.floor(totalSegundos / 3600);
        let minutos = Math.floor((totalSegundos % 3600) / 60);
        let segundos = totalSegundos % 60;
        document.getElementById("resultado").innerText = `${horas}h ${minutos}m ${segundos}s`;
    }
}

//Dos inputs de tipo password . Validar: que la contraseña tenga al menos 6 caracteres y que ambos campos coincidan. Mostrar
//un mensaje claro y específico para cada caso de error.

function validar() {
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    if (pass1.lenght < 6) {
        alert("Error: la contraseña debe tener al menos 6 caracteres.");
    } else if (pass1 !== pass2) {
        alert("Error: las contraseñas no coinciden.");
    } else {
        document.getElementById("resultado").innerText = "cotraseña valida.";
    }

}

//Un input con una nota del 0 al 10. Mostrar la condición según estos rangos: 0–3 → Desaprobado · 4–5 → Recuperatorio · 6–7 →
//Aprobado · 8–9 → Muy bueno · 10 → Sobresaliente.Validar que la nota esté entre 0 y 10.

function nota() {
    let nota = Number(document.getElementById("nota").value);
    let condicion;
    if (nota < 0 || nota > 10) {
        alert("eror, la nota debe estar entre 0 y 10.");
    } else if (nota >= 0 && nota <= 3) {
        condicion = "desaprobado";
    } else if (nota >= 4 && nota <= 5) {
        condicion = "recuperatorio";
    } else if (nota >= 6 && nota <= 7) {
        condicion = "aprobado";
    } else if (nota >= 8 && nota <= 9) {
        condicion = "muy bueno";
    } else if (nota === 10) {
        condicion = "sobresaliente";
    }
    document.getElementById("resultado").innerText = `La condicion es: ${condicion}`;
}

//Dos inputs: precio del producto y monto entregado. Si el monto es menor al precio, indicar cuánto falta. Si es igual: "Monto
//exacto, sin vuelto." Si es mayor, mostrar el vuelto. Todos los montos con 2 decimales.\

function vuelto() {
    let precio = Number(document.getElementById("precio").value);
    let monto = Number(document.getElementById("monto").value);
    if (monto < precio) {
        let falta = precio - monto;
        document.getElementById("resultado").innerText = `Falta: $${falta.toFixed(2)}`;
    } else if (monto === precio) {
        document.getElementById("resultado").innerText = "Monto exacto, sin vuelto.";
    } else {
        let vuelto = monto - precio;
        document.getElementById("resultado").innerText = `Vuelto: $${vuelto.toFixed(2)}`;
    }

}

//Calculadora con dos inputs, un <select> de operación (suma, resta, multiplicación, división, potencia) y dos botones: uno para
//calcular y otro para limpiar.Validar campos vacíos.Controlar división por cero.Mostrar resultado con 2 decimales y también en
//consola.El botón limpiar debe vaciar inputs y resultado.

function calcular() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    if (isNaN(num1) || isNaN(num2)) {
        alert("error: ambos campos debe ser numeros.");
    } else {
        let resultado;
        switch (operacion) {
            case "suma":
                resultado = num1 + num2;
                break;
            case "resta":
                resultado = num1 - num2;
                break;
            case "multi":
                resultado = num1 * num2;
                break;
            case "div":
                if (num2 === 0) {
                    alert("Error: no se puede dividir por cero.");
                    return;

                }
                resultado = num1 / num2;
                break;
            case "potencia":
                resultado = Math.pow(num1, num2);
                break;

        }
        document.getElementById("resultado").innerText = `El resultado es: ${resultado.toFixed(5)}`;
    }
}

function limpiar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerText = "";

}