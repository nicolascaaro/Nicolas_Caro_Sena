let num = 157

if(num <= 0){
    console.log("ingrese un numero entero")
}

function sumaDigitos(num){
    let suma = 0
    while(num > 0){
        let digito = num % 10
        suma += digito
        num = Math.floor(num / 10)
    }
    return suma
}

console.log (sumaDigitos(num))