const leer = require("prompt-sync")();

const DESCUENTO = 0.75;
const DIA_1_DESCUENTO = "J";
const DIA_2_DESCUENTO = "V";

function main() {
    let diaCompra = "def dia compra";
    let totalCompra = -1;

    console.log("Ingresa el dia de la compra\n\tL-M-Mi-J-V");

    diaCompra = leer().toUpperCase();

    console.log("Ingresa total de la compra");
    totalCompra = Number(leer());
    
    if (diaCompra == DIA_1_DESCUENTO || diaCompra == DIA_2_DESCUENTO) {
        console.log("Descuento aplicado\n\tValor final de compra: "+ (totalCompra * DESCUENTO));
    }else{
        console.log("Total a pagar es:", totalCompra);
    }
}

main();
