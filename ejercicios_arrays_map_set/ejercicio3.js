const asistentes = new Map([
    [1, "Ana"],
    [2, "Luis"]
  ])
  
  const agregarAsistente = (codigo, nombre) => {
    asistentes.set(codigo, nombre)
  }
 
  agregarAsistente(3, "Sofía")
  
  console.log(asistentes);