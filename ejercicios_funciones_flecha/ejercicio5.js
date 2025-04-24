const invertirCadena = (texto) => {
    let invertida = ""

    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i]
    }

    return invertida;
}

console.log(invertirCadena("hola"))
console.log(invertirCadena("JavaScript"))
console.log(invertirCadena("12345"))