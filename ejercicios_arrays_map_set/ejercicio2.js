const preciosProductos = [500, 1200, 300, 1500, 800]

const hayPrecioMayorA1000 = preciosProductos.some(precio => precio > 1000)

console.log(hayPrecioMayorA1000)