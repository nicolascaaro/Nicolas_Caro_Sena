let num = 6

let resultado = 1

function factorial (num){
    if (num < 0){
        console.log("digite un numero entero positivo")
    } else {
        for (let i = 1; i <= num; i++){
            resultado *= i
        }
    }
    return resultado
}

console.log (factorial(num))