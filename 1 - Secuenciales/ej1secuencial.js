const leer = require("prompt-sync")();

/**
 * Funcion principal del programa
 */
function main() {
    let subeIdentificador = "def id";
    let saldoInicial = 0;
    let medioPago = "def medio de pago";
    let saldoRecarga = 0;
    let saldoActual = 0;

    console.log("Ingresa tu nombre o numero de tarjeta");
    subeIdentificador = leer();
    console.log("Ingresa saldo inicial");
    saldoInicial = Number(leer());
    console.log("Ingresa medio de pago [mercadoCode - efectivo]");
    medioPago = leer();
    console.log("Ingresa monto a cargar");
    saldoRecarga = Number(leer());

    saldoActual = saldoInicial + saldoRecarga;

    console.log("Tarjeta sube de "+ subeIdentificador+" con saldo inicial de $"+saldoInicial+" opcion de pago "+medioPago+" incrementa su saldo en $"+saldoRecarga);

    console.log("Saldo de tarjeta actual: $"+saldoActual);
    console.log("Gracias por usar nuestros servicios!");
    
}

main();
