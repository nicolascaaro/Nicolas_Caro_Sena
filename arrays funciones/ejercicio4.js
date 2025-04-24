let productos = ["Agua", "Gaseosa", "Papas", "Brownie De chocolate", "Detodito"]
let cantidades = [5, 5, 5, 5, 5]
let precio = 1

function mostrarInventario() {
    let inventario = "Inventario de la máquina expendedora:\n"
    productos.forEach((producto, index) => {
        inventario += `${index + 1}. ${producto} - Cantidad: ${cantidades[index]}\n`
    })
    alert(inventario)
}

function comprarProducto() {
    let codigo = Number(prompt("Ingrese el código del producto (1-5):"))

    if (codigo < 1 || codigo > productos.length) {
        alert("Código inválido. Intente nuevamente.")
        setTimeout(() => location.reload(), 2000)
        return
    }

    let indice = codigo - 1
    if (cantidades[indice] === 0) {
        alert(`El producto, ${productos[indice]} se acabo.`)
        setTimeout(() => location.reload(), 2000)
        return
    }

    let pago = Number(prompt(`El producto ${productos[indice]} cuesta $${precio}. Ingrese $3 para comprar:`))

    if (pago !== precio) {
        alert("Pago incorrecto. Solo se aceptan monedas de $3.")
        setTimeout(() => location.reload(), 2000)
        return
    }

    cantidades[indice]--;
    alert(`Gracias por comprar ${productos[indice]} Quedan ${cantidades[indice]} en el inventario.`)
    setTimeout(() => location.reload(), 2000)
}

mostrarInventario();
comprarProducto();