const generarFibonacci = (n) => {
    let serie = []

    if (n <= 0) return serie
    if (n >= 1) serie.push(0)
    if (n >= 2) serie.push(1)

    for (let i = 2; i < n; i++) {
        let siguiente = serie[i - 1] + serie[i - 2]
        serie.push(siguiente)
    }

    return serie
}

console.log(generarFibonacci(0))
console.log(generarFibonacci(1))
console.log(generarFibonacci(5))
console.log(generarFibonacci(10))