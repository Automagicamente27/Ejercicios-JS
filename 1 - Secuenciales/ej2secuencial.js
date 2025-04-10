const leer = require("prompt-sync")();

const DIF_MIN_HORAS_VUELO = 3;

/**
 * Funcion principal del programa
 */
function main() {
    let horaSalidaVuelo = -1;
    let horaLlegada = -1;
    let estadoRegistro = false;
    let equipajeEntregado = false;
    let poseeTarjetaImpresa = false;
    let poseeTarjetaDigital = false;
    let llegoEnHora = false;
    let poseeTarjeta = false;

    console.log("Ingrese hora de salida para el vuelo [Formato 2 Digitos]");
    horaSalidaVuelo = Number(leer());
    console.log("Ingresa hora de llegada [Formato 2 Digitos]");
    horaLlegada = Number(leer());
    console.log("Hiciste el check-in? [1-SI, 0-NO]");
    estadoRegistro = Boolean(Number(leer()));
    console.log("Entregaste el equipaje? [1-SI, 0-NO]");
    equipajeEntregado = Boolean(Number(leer()));
    console.log("Tenes tarjeta de embarque impresa? [1-SI, 0-NO]");
    poseeTarjetaImpresa = Boolean(Number(leer()));
    console.log("Tenes tarjeta de embarque digital? [1-SI, 0-NO]");
    poseeTarjetaDigital = Boolean(Number(leer()));
    
    // 10 - 7 = 3 >= DIF_MIN_HORAS_VUELO = true
    // 10 - 9 = 1 >= DIF_MIN_HORAS_VUELO = false
    // 10 - 5 = 5 >= DIF_MIN_HORAS_VUELO = true
    llegoEnHora = (horaSalidaVuelo - horaLlegada) >= DIF_MIN_HORAS_VUELO;
    
    // OR ( || ) 
    poseeTarjeta = (poseeTarjetaImpresa || poseeTarjetaDigital)    

    console.log("\t\t###Estado de vuelo###\n");
    console.log(DIF_MIN_HORAS_VUELO+"hrs antes del vuelo: "+llegoEnHora);
    console.log("con check-in: "+estadoRegistro);
    console.log("equipaje entregado: "+equipajeEntregado);
    console.log("dispone de tarjeta embarque: "+poseeTarjeta);
    // AND ( && ) 
    console.log("\nCumple con los requerimientos: "+ (llegoEnHora && estadoRegistro && equipajeEntregado && poseeTarjeta));
    
}

main();
