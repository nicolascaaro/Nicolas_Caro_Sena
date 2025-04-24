let modelo = 780
let modelos = [119, 179, 189, 195, 221, 780]
let defectuoso = false

for (let i = 0; i < modelos.length; i++){
    if (modelo == modelos[i]){
        defectuoso = true
        break
    }
}

if (defectuoso){
    console.log ("El modelo esta defectuoso")
} else {
    console.log ("El modelo no esta defectuoso")
}
//length es el tamaña de un arreglo
//nombre[1] -- 1 es la posicion del arreglo que quiero imprimir
//let i = 0 --- desde donde va a empezar
//i <= nombres.length --- hasta donde va a llegar
//i++ --- de cuanto en cuanto va a avanzar
/// break --- para el ciclo
///continue --- para el ciclo y sigue con el siguiente
