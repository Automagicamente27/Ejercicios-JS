const leer = require("prompt-sync")();

/**
 * Funcion principal del programa
 */
function main() {
    let idSube = "def id sube";
    let saldoInicial = 0;
    let medioPago = "def medio pago";
    let montoCargar = 0;
    let saldoActual = 0;
    
    console.log("Ingresa tu nombre o id de tarjeta");
    idSube = leer();
    console.log("Ingresa saldo inicial");
    saldoInicial = Number(leer());
    console.log("ingresa medio pago [efectivo - tarjeta]");
    medioPago = leer();
    console.log("ingersa monto a cargar");
    montoCargar = Number(leer());
    
    saldoActual = saldoInicial + montoCargar
    
    console.log("### INFORME DE CARGA ###\n");
    console.log("Tarjeta "+idSube+" con saldo inicial $"+saldoInicial+", medio de pago "+medioPago+" con monto a cargar de $"+montoCargar);
    console.log("\tSaldo actual es de $"+saldoActual);
}

main();
