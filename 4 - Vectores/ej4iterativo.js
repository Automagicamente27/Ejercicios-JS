const leer = require("prompt-sync")();

//CRUD: CREATE - READ - UPDATE - DELETE

function main() {
    const tareas = ["Lavar ropa", "Ordenar cuarto", "Practicar programacion", "cocinar"];
    let posTareaModificar = -1;

    console.log(tareas);
    console.log("Que tarea desea marcar como completada?");
    posTareaModificar = Number(leer());

    //tareas[posTareaModificar-1] = tareas[posTareaModificar-1] + " - COMPLETADA";
    tareas[posTareaModificar-1] += " - COMPLETADA";
    console.log("### Marcando tarea Nº"+posTareaModificar+" como completada ###");
    console.log(tareas);
    
}

main();