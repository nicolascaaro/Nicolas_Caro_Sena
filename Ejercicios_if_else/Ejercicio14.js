let tamaño = "grande"
let adicionales = "tocineta" 

let precio;
let precioAdicionales;

if (tamaño == "grande"){
    precio = 12000
    if (adicionales == "tocineta"){
        precioAdicionales = 3000
    } else if (adicionales == "pavo"){
        precioAdicionales = 3000
    } else if (adicionales == "queso"){
        precioAdicionales = 2500
    } else {
        precioAdicionales = 0
    }
}

if (tamaño == "pequeño"){
    precio = 6000
    if (adicionales == "tocineta"){
        precioAdicionales = 3000
    } else if (adicionales == "pavo"){
        precioAdicionales = 3000
    } else if (adicionales == "queso"){
        precioAdicionales = 2500
    } else {
        precioAdicionales = 0
    }
}

let precioTotal = precio + precioAdicionales
console.log ("El precio total del sandwich es de: "+precioTotal)