let n = 10

let suma;
let a = 0
let b = 1

if (n < 0){
    console.log ("ingrese un numero entero")
}

function numeros(n){
    let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    for (let i = 0; i < n; i++){
        suma = a + b
        a = b
        b = suma
    }
    return suma
}

console.log (numeros(n))