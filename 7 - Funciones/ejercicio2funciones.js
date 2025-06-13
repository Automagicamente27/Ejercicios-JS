const leer = require("prompt-sync")();


//const personajes = ["Harry Potter", "Newt Scamander"];
const MAX_FILA = 7;
const MAX_COL = 10;
const MSJ_INICIAL = "Yo juro solemnemente que mis intenciones son malas";
const MSJ_FINAL = "Travesura realizada";

const SIMB_CASILLA_VACIA = " . ";

const tablero = [];

const SIMB_PERSONAJE_1 = " H ";
const SIMB_PERSONAJE_2 = " N ";

const personaje1 = {
    posY: 0,
    posX: 0
}
const personaje2 = {
    posY: 1,
    posX: 1
}

/**
 * Inicia el programa
 */
function main() {
    let msjIngresado = "def msj ingresado";
    crearTablero();
    while (msjIngresado != MSJ_FINAL ) {
        console.clear();
        tablero[personaje1.posY][personaje1.posX] = SIMB_PERSONAJE_1;
        tablero[personaje2.posY][personaje2.posX] = SIMB_PERSONAJE_2;
        console.log("\t ### "+MSJ_INICIAL+" ###");
        mostrarTablero();
        console.log("Ingresa msj secreto para finalizar o cualquiera para continuar");
        msjIngresado = leer();
        actualizarCasillaA(personaje1);
        actualizarCasillaA(personaje2);
    }
}




main();

/**
 * Actualiza la casilla del personaje
 * @param {Object} unPersonaje a actualizar casilla
 */
function actualizarCasillaA(unPersonaje) {
    tablero[unPersonaje.posY][unPersonaje.posX] = SIMB_CASILLA_VACIA;
    unPersonaje.posY += generarMovimientoEntre(-1, 1);
    unPersonaje.posX += generarMovimientoEntre(-1, 1);
    regularMovimientoA(unPersonaje);
}

/**
 * Regular el movimiento del personaje en los limites del tablero
 * @param {Object} unPersonaje a regular el movimiento
 */
function regularMovimientoA(unPersonaje) {
    regularEjeA(unPersonaje, "posY", MAX_FILA);
    regularEjeA(unPersonaje, "posX", MAX_COL);
}

function regularEjeA(unPersonaje, eje, maxEje) {
    if (unPersonaje[eje] < 0) {
        unPersonaje[eje] = 0;
    } else if (unPersonaje[eje] > maxEje - 1) {
        unPersonaje[eje] = maxEje - 1;
    }
}


/**
 * Genera un movimiento aleatorio
 * @param {Number} min del movimiento a generar
 * @param {Number} max del movimiento a generar
 * @returns un movimiento aleatorio en el rango ingresado
 */
function generarMovimientoEntre(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}


/**
 * Muestra el tablero en consola
 */
function mostrarTablero() {
    for (let fil = 0; fil < tablero.length; fil++) {
        process.stdout.write("\t\t\t");
        for (let col = 0; col < tablero[fil].length; col++) {
            process.stdout.write(tablero[fil][col]);
        }
        console.log();
    }
}

/**
 * Crea el tablero con las dimensiones correspondientes
 */
function crearTablero() {
    for (let fila = 0; fila < MAX_FILA; fila++) {
        tablero[fila] = [];
        for (let col = 0; col < MAX_COL; col++) {
            tablero[fila][col] = SIMB_CASILLA_VACIA;
        }
    }
}
