const calcularPotencia = (base, exponente) => {
    let resultado = 1

    if (exponente === 0) return 1

    for (let i = 1; i <= Math.abs(exponente); i++) {
        resultado *= base
    }

    return exponente > 0 ? resultado : 1 / resultado
}

console.log(calcularPotencia(2, 3))
console.log(calcularPotencia(5, 0))
console.log(calcularPotencia(3, 1))
console.log(calcularPotencia(2, -2))
console.log(calcularPotencia(-2, 3))