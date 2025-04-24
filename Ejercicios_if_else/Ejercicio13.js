let operador = "Claro"
let minutosConsumidos = 12

let cargoFijo;
let costoMinuto;
let costoDatos;

if (operador == "Tigo"){
    cargoFijo = 45000
    costoMinuto = 200
    costoDatos = 12000
} else if (operador == "Claro"){
    cargoFijo = 30000
    costoMinuto = 100
    costoDatos = 18000
} else if (operador == "Movistar"){
    cargoFijo = 40000
    costoMinuto = 250
    costoDatos = 8000
}

let totalMinutos = minutosConsumidos * costoMinuto

console.log ("el total de minutos consumidos es: "+totalMinutos)