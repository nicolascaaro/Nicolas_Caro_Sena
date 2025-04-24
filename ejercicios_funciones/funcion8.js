let array = [1, 2, 7, 4, 5]

let nMayor = [0]

function mayor(array){
    for(let i = 1; i <= array.length; i++){
        if(array [i] > nMayor){
            nMayor = array[i]
        }
    }
    return nMayor
}

console.log(mayor(array))