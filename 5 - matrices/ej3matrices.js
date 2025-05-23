const leer = require("prompt-sync")();

const nombresDiaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function main() {
    const tareasSemana = [
        ["Lavar ropa", "Jugar con mascota"],
        [],
        ["Ordenar cuarto","Cocinar","Ejercicio"],
        [],
        ["Practicar programacion"],
        [],
        [],
    ]
    let posDiaIngresado = -1;
    let posTareaEliminar = -1;

    //muestra el menu
    console.log("Ingrese opcion del día a eliminar una tarea");
    for (let i = 0; i < nombresDiaSemana.length; i++) {
        console.log("\t" + (i + 1) + " - " + nombresDiaSemana[i]);
    }
    posDiaIngresado = Number(leer()) - 1;
    console.log("### Mostrando "+tareasSemana[posDiaIngresado].length  +" tarea/s del día "+nombresDiaSemana[posDiaIngresado]+" ###");

    //muestra tareas del dia solicitado
    for (let columna = 0; columna < tareasSemana[posDiaIngresado].length; columna++) {
        console.log("\tTarea Nº "+(columna+1)+": "+ tareasSemana[posDiaIngresado][columna]);
    }
    console.log("Ingresa el numero de tarea a eliminar");
    posTareaEliminar = Number(leer());
    console.log("### Eliminando tarea Nº"+ posTareaEliminar +" del día "+nombresDiaSemana[posDiaIngresado]+" ###");
    //posTareaEliminar = posTareaEliminar - 1;
    //posTareaEliminar-=1;
    posTareaEliminar--;
    tareasSemana[posDiaIngresado].splice(posTareaEliminar, 1);
    console.log(tareasSemana);
}

main();