const proyectos = [
    new Map([["nombre", "Proyecto A"], ["presupuesto", 5000]]),
    new Map([["nombre", "Proyecto B"], ["presupuesto", 8000]])
  ];

  const agregarProyecto = (nombre, presupuesto) => {
    const nuevoProyecto = new Map([["nombre", nombre], ["presupuesto", presupuesto]])
    proyectos.push(nuevoProyecto)
  }

  agregarProyecto("Proyecto C", 6000)
  console.log(proyectos)