let habitaciones = [0, 0, 0, 0, 0]

while (true) {
    let opcion = prompt("1.Ver estado\n 2.Reservar Habitacion\n 3.Liberar Habitacion\n 4.Salir")
    if (opcion === "1") {
        mostrarEstado()
    } else if (opcion === "2") {
        let num = Number(prompt("Ingrese el número de la habitacion del 1 al 5"))
        reservar(num)
    }else if (opcion === "3") {
        let num = Number(prompt("Ingrese el número de la habitacion del 1 al 5"))
            liberar(num)
    } else if (opcion === "4") {
        alert("Vuelva pronto")
        break
    } else {
        alert("Opción inválida.")
    }
}

function mostrarEstado (){
    let estado = "Estado de las habitaciones:\n"
    for (let i = 0; i < habitaciones.length; i++) {
        estado += `La habitacion ${i + 1}: ${habitaciones[i] === 0 ? "Libre" : "Ocupada"}\n`;
    }
    alert(estado)
}

function reservar (num){
    if (num < 1 && num > 5) {
        alert("El numero de habitacion no coincide")
    } else if (habitaciones[num - 1] === 1) {
        alert("La habitacion ya esta reservada")
    } else {
        habitaciones[num - 1] = 1
        alert(`La habitación ${num} ha sido reservada correctamente`)
    }
}

function liberar (num){
    if (num < 1 && num > 5) {
        alert("El numero de habitacion no coincide")
    } else if (habitaciones[num - 1] === 0) {
        alert("La habitación ya esta libre")
    } else {
        habitaciones[num - 1] = 1
        alert(`La habitación ${num} se ha liberado`)
    }
}
