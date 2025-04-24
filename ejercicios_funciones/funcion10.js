let numero = 8

function divisibles (numero){
    for(let i = 1; i <= numero; i++){
        if(numero % 3 == 0 && numero % 5 == 0){
            return numero
        }
    }
    return "Numero no divisible"
}

console.log(divisibles(numero))