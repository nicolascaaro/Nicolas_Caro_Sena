const calcularFactorial = (numero) => {
    let resultado = 1;

    if (numero < 0) {
        return "El número debe ser positivo.";
    }

    for (let i = 1; i <= numero; i++) {
        resultado *= i
    }

    return resultado
}

console.log(calcularFactorial(5))
console.log(calcularFactorial(0))
console.log(calcularFactorial(-3))