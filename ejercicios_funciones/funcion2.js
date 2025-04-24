let num = 4

if (num <= 1){
    return false
}

function numPrimo(num){
    for ( let i = 2; i <= num; i++)
        if (num % i === 0){
            console.log("el numero ingresado no es primo")
            return false
        }else {
            console.log ("el numero ingresado es primo")
            return true
        }
}

console.log (numPrimo(num))