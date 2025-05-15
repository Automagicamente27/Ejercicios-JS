const leer = require("prompt-sync")();

function main() {
    const tareas = ["Lavar ropa", "Ordenar cuarto", "Practicar programacion"];
    let posTareaEliminar = -1;

    console.log(tareas);
    console.log("Que tarea desea eliminar?");
    posTareaEliminar = Number(leer());
    tareas.splice(posTareaEliminar-1, 1)
    console.log("### Eliminando tarea Nº"+posTareaEliminar+" ###");
    console.log(tareas);
    
}

main();