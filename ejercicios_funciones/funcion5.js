let texto = "Hola Mundo";

function invertirCadena(cadena) {
    let cadenaInvertida = '';

    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }

    return cadenaInvertida;
}

console.log(invertirCadena(texto));  