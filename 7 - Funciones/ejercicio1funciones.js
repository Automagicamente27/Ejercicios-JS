const leer = require("prompt-sync")();

const personajes = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley",
    "Albus Dumbledore",
    "Severus Snape",
    "Lord Voldemort",
    "Draco Malfoy",
    "Sirius Black",
    "Rubeus Hagrid",
    "Luna Lovegood",
];





function main() {
    let posImpostor = -1;
    let opcIngresada = -1;

    posImpostor = azar(personajes.length);
    mostrarInformacion();
    mostrarPersonajes();
    opcIngresada = leerNumero() - 1;
    evaluarFinal(opcIngresada, posImpostor);
}



main();













/**
 * Evalua el final del juego dependiendo del numero ingresado por el usuario
 * @param {Number} opcIngresada para adivinar al impostor
 * @param {Number} posImpostor generado aleatoriamente
 */
function evaluarFinal(opcIngresada, posImpostor) {
    if (opcIngresada === posImpostor) {
        console.log("¡Adivinaste! El impostor es: " + personajes[posImpostor]);
    } else {
        console.log("¡Oh no! No has adivinado el impostor. Algo misterioso está ocurriendo...");
        console.log("Cuidado con " + personajes[posImpostor] + "!");
    }
}

/**
 * Recibe un numero desde consola
 * @returns un numero ingresado por consola
 */
function leerNumero() {
    return Number(leer());
}

/**
 * Muestra informacion al usuario
 */
function mostrarInformacion() {
    console.log("Selecciona un número de personaje para encontrar al impostor:");
}

/**
 * Muestra los personajes disponibles
 */
function mostrarPersonajes() {
    for (let i = 0; i < personajes.length; i++) {
        console.log("\t" + (i + 1) + " - " + personajes[i]);
    }
}

/**
 * Genera un numero aleatorio entre 0 y el maximo (no inclusive)
 * @param {Number} max el rango maximo, del numero aleatorio
 * @returns un numero aleatorio
 */
function azar(max) {
    return Math.floor(Math.random() * (max));
}