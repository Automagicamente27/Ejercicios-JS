const leer = require("prompt-sync")();

function main() {
    let tipoPedido = "def tipo pedido";
    let tipoProducto = "def tipo producto";
    let medioPago = "def medio pago";

    let opcIngresada = "def opcion ingresada";

    console.log("Desea pedir algo de\n\t[C] Comida Rapida\n\t[S] Supermercado\n\t[F] Farmacia");
    opcIngresada = leer().toUpperCase();

    switch (opcIngresada) {
        case "C":
            tipoPedido = "Comida Rapida";
            console.log("Seleccione el producto:\n\tA-Pizza\n\tB-Hamburguesa");
            opcIngresada = leer().toUpperCase();
            switch (opcIngresada) {
                case "A":
                    tipoProducto = "Pizza";
                    break;
                case "B":
                    tipoProducto = "Hamburguesa";
                    break;
                default:
                    console.log("\t\tProducto no valido !!!");
            }
            break;
        case "S":
            tipoPedido = "Supermercado";
            console.log("Seleccione el producto:\n\tA-Papel Higienico\n\tB-Harina");
            opcIngresada = leer().toUpperCase();
            switch (opcIngresada) {
                case "A":
                    tipoProducto = "Papel Higienico";
                    break;
                case "B":
                    tipoProducto = "Harina";
                    break;
                default:
                    console.log("\t\tProducto no valido !!!");
            }
            break;
        case "F":
            tipoPedido = "Farmacia";
            console.log("Seleccione el producto:\n\tA-Medicamento\n\tB-Curitas");
            opcIngresada = leer().toUpperCase();
            switch (opcIngresada) {
                case "A":
                    tipoProducto = "Medicamento";
                    break;
                case "B":
                    tipoProducto = "Curitas";
                    break;
                default:
                    console.log("\t\tProducto no valido !!!");
            }
            break;
        default:
            console.log("No es opcion valida");
    }

    console.log("Seleccione medio de pago:\n\tA-Efectivo\n\tB-Tarjeta");
    opcIngresada = leer().toUpperCase();

    switch (opcIngresada) {
        case "B":
            medioPago = "Tarjeta"
            console.log("Seleccione tipo de tarjeta:\n\tA-Debito\n\tB-Credito");
            opcIngresada = leer().toUpperCase();
            switch (opcIngresada) {
                case "A":
                    medioPago += "Debito";
                    break;
                case "B":
                    medioPago = medioPago + "Credito";
                    break;
                default:
                    console.log("\t\tProducto no valido !!!");
            }
            break;
        case "A":
            medioPago = "Efectivo";
            break;
        default:
            console.log("No es medio de pago valido");
    }

    console.log("### Iniciando pedido ###\n");
    console.log("\tTipo de pedido: "+tipoPedido);
    console.log("\tTipo de producto: "+tipoProducto);
    console.log("\tMedio de pago: "+medioPago);
    console.log("\nPedido iniciado...");
    
}

main();
