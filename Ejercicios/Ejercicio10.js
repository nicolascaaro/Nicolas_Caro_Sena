let nCopias = 500

if (nCopias <= 499 && nCopias > 0){
    let precioCopia = 120
    let precioTotal = nCopias * precioCopia
    console.log(`El precio total de sus ${nCopias} copias es de: $${precioTotal}`);
} else if (nCopias >= 500 && nCopias <= 749){
    precioCopia = 100
    precioTotal = nCopias * precioCopia
    console.log(`El precio total de sus ${nCopias} copias es de: $${precioTotal}`);
} else if (nCopias >= 750 && nCopias <= 999){
    precioCopia = 80 
    precioTotal = nCopias * precioCopia
    console.log(`El precio total de sus ${nCopias} copias es de: $${precioTotal}`);
} else if (nCopias >= 1000){
    precioCopia = 50 
    precioTotal = nCopias * precioCopia
    console.log(`El precio total de sus ${nCopias} copias es de: $${precioTotal}`);
} else {
    console.log ("Fotocopiadora Apagada")
}