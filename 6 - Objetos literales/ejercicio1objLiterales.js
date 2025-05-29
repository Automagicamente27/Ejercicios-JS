const leer = require("prompt-sync")();

const nombreDias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function main() {
    const tareasSemana = [
        [{
            titulo: "Lavar ropa",
            fechaCreacion: new Date("2023/3/11"),
            terminada: false
        }],
        [],
        [{
            titulo: "Ordenar cuarto",
            fechaCreacion: new Date("2015/4/23"),
            terminada: false
        }],
        [],
        [],
        [{
            titulo: "Practicar programacion",
            fechaCreacion: new Date("2027/7/5"),
            terminada: false
        }],
        []
    ];
    let posDiaIngresado = -1;

    console.log("Ingrese opcion del día a mostrar");
    for (let i = 0; i < nombreDias.length; i++) {
        console.log("\t" + (i+1) + " - " + nombreDias[i]);
    }
    posDiaIngresado = Number(leer()) - 1;
    console.log("### Mostrando "+tareasSemana[posDiaIngresado].length  +" tarea/s del día "+nombreDias[posDiaIngresado]+" ###");
    
    for (let columna = 0; columna < tareasSemana[posDiaIngresado].length; columna++) {
        console.log("Tarea Nº "+(columna+1)+": ");
        console.log("\t- "+tareasSemana[posDiaIngresado][columna].titulo);
        console.log("\t- "+tareasSemana[posDiaIngresado][columna].fechaCreacion.toLocaleDateString());
        console.log("\t- "+tareasSemana[posDiaIngresado][columna].terminada);
    }
    console.log("### Fin de tareas ###");
}

main();