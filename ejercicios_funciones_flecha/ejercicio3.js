const sumaDigitos = (numero) => {
    
    numero = Math.abs(numero);
    let suma = 0;

    while (numero > 0) {
        let digito = numero % 10
        suma += digito
        numero = Math.floor(numero / 10)
    }

    return suma;
};

console.log(sumaDigitos(1234))
console.log(sumaDigitos(987))
console.log(sumaDigitos(-345))