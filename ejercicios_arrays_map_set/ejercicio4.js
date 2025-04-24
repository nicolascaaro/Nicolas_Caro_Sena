const asistentes = new Map([
    [101, "Carlos"],
    [102, "María"],
    [103, "José"]
  ])
  
  const verificarAcceso = (codigo) => {
    if (asistentes.has(codigo)) {
      console.log(`Acceso permitido a: ${asistentes.get(codigo)}`)
    } else {
      console.log("Acceso denegado. Código no registrado.")
    }
  }

  verificarAcceso(102)
  verificarAcceso(104)