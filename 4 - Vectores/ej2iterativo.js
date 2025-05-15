const leer = require("prompt-sync")();

function main() {
    const tareas = ["practicar programacion"];
    let cantTareasAgregar = 0;
    let tempTarea = "def temp tarea";

    console.log("Cuantas tareas necesitas agregar?");
    cantTareasAgregar = Number(leer());

    for (let i = 0; i < cantTareasAgregar; i++) {
        console.log("Ingresa nueva tarea");
        tempTarea = leer();
        console.log("Agregando nueva tarea: "+ tempTarea);
        tareas.push(tempTarea);
    }
    console.log(tareas);

}

main();