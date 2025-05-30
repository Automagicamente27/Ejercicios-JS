const leer = require("prompt-sync")();

const nombresDiaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const DEF_TAREA_TERMINADA = false;


function main() {
    const tareasSemana = [
        [
            {
                titulo: "Lavar ropa",
                fechaCreacion: new Date("2024/"),
                terminada: DEF_TAREA_TERMINADA
            },
            {
                titulo:"Jugar con mascota",
                fechaCreacion: new Date("2024/3"),
                terminada: DEF_TAREA_TERMINADA
            }
        ],
        [],
        [
            {
                titulo: "Ordenar cuarto",
                fechaCreacion: new Date("2023/4"),
                terminada: DEF_TAREA_TERMINADA
            },
            {
                titulo:"Ejercicio",
                fechaCreacion: new Date("2024/7/22"),
                terminada: DEF_TAREA_TERMINADA
            }
        ],
        [],
        [],
        [],
        [],
    ]
    let posDiaIngresado = -1;
    let posTareaActualizar = -1;
    let tareaTemp = "def tarea temp";
    //muestra el menu
    console.log("Seleccione dia a modificar");
    for (let i = 0; i < nombresDiaSemana.length; i++) {
        console.log("\t" + (i + 1) + " - " + nombresDiaSemana[i]);
    }
    posDiaIngresado = Number(leer()) - 1;
    console.log("### Mostrando "+tareasSemana[posDiaIngresado].length  +" tarea/s del día "+nombresDiaSemana[posDiaIngresado]+" ###");

    //muestra tareas del dia solicitado
    for (let columna = 0; columna < tareasSemana[posDiaIngresado].length; columna++) {
        console.log("\t"+(columna+1)+"- "+tareasSemana[posDiaIngresado][columna].titulo);
    }
    console.log("Seleccione una tarea a actualizar como Terminada");
    posTareaActualizar = Number(leer());
    posTareaActualizar--;
    tareaTemp = tareasSemana[posDiaIngresado][posTareaActualizar];

    console.log("### Actualizando la tarea '"+ tareaTemp.titulo +"' del día "+ nombresDiaSemana[posDiaIngresado]+" como Terminada ###");
    
    tareaTemp.terminada = true;

    console.log(tareasSemana);
}

main();