let cola = [];

const MAX_COLA = 5

function agregarCliente(nombre) {
    if (cola.length < MAX_COLA) {
        cola.push(nombre)
        console.log(nombre + " fue agregado a la fila")
    } else {
        console.log("La cola está llena. " + nombre + " no puede ser agregado.")
    }
}

function atenderCliente() {
    if (cola.length > 0) {
        let clienteAtendido = cola.shift()
        console.log("Atendiendo a: " + clienteAtendido)
    } else {
        console.log("No hay clientes en la fila para atender.")
    }
}

agregarCliente("Laura")
agregarCliente("Nicolas")
agregarCliente("Cristian")
agregarCliente("Laura")
agregarCliente("Matallana")
agregarCliente("Carlos")

console.log("Estado de la cola:", cola)

atenderCliente()
atenderCliente()

console.log("Estado de la cola después de atender a dos clientes:", cola)