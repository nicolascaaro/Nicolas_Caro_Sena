let numero = 8

if(numero <= 0){
    console.log("ingrese un numero mayor de 0")
}

function parOImpar(numero){
    for(let i = 1; i <= numero; i++){
        if(numero % 2 == 0){
            console.log("el numero ingresado es par")
        } else {
            console.log("el numero ingresado es impar")
        }
        break
    }
    return numero
}

console.log(parOImpar(numero))