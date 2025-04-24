let numero = 10
let multiplos = 0

let multiplosDe3 = (numero) => {
    for(let i = 1; i <= numero; i++){
        if(numero % 3 == 0){
            multiplos.push (i)
        }
        return multiplos
    }
}

console.log(multiplosDe3(numero))