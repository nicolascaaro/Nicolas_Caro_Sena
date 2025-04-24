let modelos = Number(prompt("Seleccione modelo: 1. Clasicos 2. Running 3. Basketball"))

let talla = Number(prompt("ingrese talla"))

let cantidad = Number(prompt("Cuantos pares quiere llevar"))

let precio;

let totalPagar
let totalDescuento

const descuento = 0.10

switch (modelos){
    case 1:
        precio = 500000
        if (talla >= 35 && talla <= 44){
        } else {
            console.log ("No hay de la talla que pide")
        }

        if (cantidad >= 1 && cantidad < 3){
            totalPagar = precio * cantidad
            console.log ("el total a pagar es de: "+totalPagar)
        } else if (cantidad >= 3 && cantidad <= 5){
                totalDescuento = precio - (precio * descuento);
                console.log("El total a pagar mas el descuento es de: $"+totalDescuento)
        } else {
            console.log("Error")
        }

        totalPagar = precio * cantidad
        console.log ("el total a pagar sin descuento es de: "+totalPagar)

        break

    case 2:
        precio = 800000
        if (talla >= 35 && talla <= 44){
        } else {
            console.log ("No hay de la talla que pide")
        }

        if (cantidad >= 1 && cantidad < 3){
            totalPagar = precio * cantidad
            console.log ("el total a pagar es de: "+totalPagar)
        } else if (cantidad >= 3 && cantidad <= 5){
            totalDescuento = precio - (precio * descuento);
            console.log("El total a pagar mas el descuento es de: $"+totalDescuento)
        } else {
            console.log("Error")
        }

        break
        
    case 3:
        precio = 1000000
        if (talla >= 35 && talla <= 44){
        } else {
            console.log ("No hay de la talla que pide")
        }

        if (cantidad >= 1 && cantidad < 3){
            totalPagar = precio * cantidad
            console.log ("el total a pagar es de: "+totalPagar)
        } else if (cantidad >= 3 && cantidad <= 5){
            totalDescuento = precio - (precio * descuento);
            console.log("El total a pagar mas el descuento es de: $"+totalDescuento)
        } else {
            console.log("Error")
        }

        break

    default: 
    console.log("ERROR")
}

