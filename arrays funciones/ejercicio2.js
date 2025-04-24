let saldo = Number(localStorage.getItem("saldo")) || 0; 
let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];

function consultarSaldo() {
    alert(`Su saldo actual es de: $${saldo}`)
    setTimeout(() => location.reload(), 2000)
}

function depositar() {
    let monto = Number(prompt("Ingrese el valor a depositar:"))
    
    if (monto <= 0 || monto > 80000) {
        alert("ERROR, No se puede realizar el depósito.")
    } else {
        saldo += monto
        transacciones.push(`Depósito: +$${monto}`)
        localStorage.setItem("saldo", saldo)
        localStorage.setItem("transacciones", JSON.stringify(transacciones))
        alert(`Depósito exitoso. Su saldo es de: $${saldo}`)
        location.reload()
    }
}

function retirar() {
    let monto = Number(prompt("Ingrese el valor a retirar:"))
    
    if (monto <= 0 || monto > saldo) {
        alert("ERROR, No se puede realizar el retiro.")
    } else {
        saldo -= monto;
        transacciones.push(`Retiro: -$${monto}`)
        localStorage.setItem("saldo", saldo)
        localStorage.setItem("transacciones", JSON.stringify(transacciones))
        alert(`Retiro exitoso. Su saldo es de: $${saldo}`)
        location.reload()
    }
}

let queDesea = Number(prompt("Ingrese: 1. Consultar Saldo. 2. Depositar. 3. Retirar."))

switch (queDesea) {
    case 1:
        consultarSaldo()
        break
    case 2:
        depositar()
        break
    case 3:
        retirar()
        break
    default:
        alert("Opción no válida.")
        setTimeout(() => location.reload(), 2000)
}

if (transacciones.length > 0) {
    console.log("Historial de transacciones:")
    transacciones.forEach(transaccion => alert(transaccion))
} else {
    alert("No hay transacciones realizadas.")
}
