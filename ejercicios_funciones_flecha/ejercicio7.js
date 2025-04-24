const contarVocales = (texto) => {
    let contador = 0
    const vocales = "aeiouAEIOU"

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++
        }
    }

    return contador
};

console.log(contarVocales("Hola mundo"))
console.log(contarVocales("JavaScript"))
console.log(contarVocales("GPT"))
console.log(contarVocales("AEIOUaeiou"))