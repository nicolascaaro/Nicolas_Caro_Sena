const calcularMCD = (a, b) => {
    a = Math.abs(a)
    b = Math.abs(b)
    let mcd = 1

    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            mcd = i
        }
    }

    return mcd
}

console.log(calcularMCD(12, 18))
console.log(calcularMCD(8, 28))
console.log(calcularMCD(7, 5))
console.log(calcularMCD(-9, 3))