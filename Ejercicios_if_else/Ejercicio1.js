let horasTrabajadas = 6

let salario;

if ( horasTrabajadas >=1 && horasTrabajadas <= 10){
    salario = horasTrabajadas * 30000
} else if (horasTrabajadas >10){
    salario = horasTrabajadas * 33000
} else {
    salario = 0
    console.log ("No hay pago")
}

console.log ("el salario es "+ salario);