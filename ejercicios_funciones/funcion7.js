let n = 5

let suma = 0

function sumaHasta(n){
    for(let i = 1; i <= n; i++){
        suma += i
    }
    return suma
}

console.log(sumaHasta(n))