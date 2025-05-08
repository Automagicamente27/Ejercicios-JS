const leer = require("prompt-sync")();

const CONVERSION_MIN = 100/60;

function main() {
    let horaInicial = -1;
    let horaFinal = -1;
    let intervaloMinutos = -1;
    let intervaloMinutosConversion = -1;
    let cantColectivos = 0;

    console.log("Ingresa hora inicial en formato de 4 digitos");
    horaInicial = Number(leer());
    console.log("Ingresa hora final en formato de 4 digitos");
    horaFinal = Number(leer());
    console.log("Ingresa el intervalo en minutos");
    intervaloMinutos = Number(leer());

    intervaloMinutosConversion = intervaloMinutos * CONVERSION_MIN;

    for (let i = horaInicial; i <= horaFinal; i += intervaloMinutosConversion) {
        cantColectivos++;
        console.log("Paso el colectivo  Nº"+cantColectivos+" hora:"+i);
    }

    console.log("\t\t### Informe de colectivos###");
    console.log("Rango de horario: "+horaInicial+" a "+horaFinal);
    console.log("Intervalo de colectivos: "+intervaloMinutos+" minutos");
    console.log("\nCantidad de colectivos: "+cantColectivos);
    
}

main();
