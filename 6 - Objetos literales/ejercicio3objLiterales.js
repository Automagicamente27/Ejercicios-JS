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
    let posTareaSeleccionada = -1;
    let posPropEliminar = -1;
    let tareaTemp = "def tarea temp";
    let propiedadesTemp = "def propiedades";
    //muestra el menu
    console.log("Ingrese opcion del día a eliminar una tarea");
    for (let i = 0; i < nombresDiaSemana.length; i++) {
        console.log("\t" + (i + 1) + " - " + nombresDiaSemana[i]);
    }
    posDiaIngresado = Number(leer()) - 1;
    console.log("### Mostrando "+tareasSemana[posDiaIngresado].length  +" tarea/s del día "+nombresDiaSemana[posDiaIngresado]+" ###");

    //muestra tareas del dia solicitado
    for (let columna = 0; columna < tareasSemana[posDiaIngresado].length; columna++) {
        console.log("\t"+(columna+1)+"- "+tareasSemana[posDiaIngresado][columna].titulo);
    }
    console.log("Seleccione una tarea a eliminar una propiedad");
    posTareaSeleccionada = Number(leer());
    posTareaSeleccionada--;
    tareaTemp = tareasSemana[posDiaIngresado][posTareaSeleccionada];
    console.log("### Propiedades en tarea: "+ tareaTemp.titulo +" ###");

    propiedadesTemp = Object.keys(tareaTemp);
    for (let i = 0; i < propiedadesTemp.length; i++) {
        if (tareaTemp[propiedadesTemp[i]] instanceof Date) {
            console.log("\t"+(i+1)+"- "+ propiedadesTemp[i] +": "+ tareaTemp[propiedadesTemp[i]].toLocaleDateString());
        }else{
            console.log("\t"+(i+1)+"- "+ propiedadesTemp[i] +": "+ tareaTemp[propiedadesTemp[i]]);
        }
    }
    console.log("Ingrese la propiedad a eliminar");
    posPropEliminar = Number(leer()) - 1;
    
    console.log("### Eliminando propiedad '"+ propiedadesTemp[posPropEliminar] +"' del día "+nombresDiaSemana[posDiaIngresado]+" ###");
    
    delete tareaTemp[propiedadesTemp[posPropEliminar]];
    console.log(tareasSemana);
}

main();