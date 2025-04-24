const esPrimo = (numero) => {
    if (numero <= 1) return false

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        }
    }
    return true
}

console.log(esPrimo(2))
console.log(esPrimo(7))
console.log(esPrimo(10))
console.log(esPrimo(1))  
console.log(esPrimo(0))