const productosVendidos = new Set([1001, 1002, 1003]);

const verificarProductoVendido = (codigo) => {
  if (productosVendidos.has(codigo)) {
    console.log(`El producto con código ${codigo} ya fue vendido hoy.`)
  } else {
    console.log(`El producto con código ${codigo} no ha sido vendido aún.`)
  }
}

verificarProductoVendido(1002)
verificarProductoVendido(1004)