const leer = require("prompt-sync")();

function main() {
    const tareas = ["Lavar ropa", "Ordenar cuarto", "Practicar programacion","cocinar"];
    let cantTareasMostrar = 0;

    console.log("Cuantas tareas queres ver? [Cantidad total: "+tareas.length+"]");
    cantTareasMostrar = leer();

    console.log("### Mostrando "+tareas.length+" tareas ###");
    for (let i = 0; i < cantTareasMostrar; i++) {
        console.log("\tTarea Nº "+(i+1)+": "+ tareas[i]);
    }
    console.log("### Fin de tareas ###");

}

main();