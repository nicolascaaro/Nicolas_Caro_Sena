let tipoLavadora = 1
let cantidad = 4
let horas = 1

let costoPorHora;

if (tipoLavadora == 1){
    costoPorHora = 4000
} else if (tipoLavadora == 2){
    costoPorHora = 3000
}else {
    console.log ("No ha alquilado lavadora")
}

let costoTotal = costoPorHora * cantidad * horas

if(cantidad > 3){
    costoTotal = costoTotal - costoTotal * 0.03
}

console.log ("El valor a pagar es de: "+costoTotal)
