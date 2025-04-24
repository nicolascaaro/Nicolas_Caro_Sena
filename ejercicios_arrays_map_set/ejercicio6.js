const sociosActivos = new Set([5001, 5002, 5003]);

const agregarSocio = (numeroSocio) => {
  sociosActivos.add(numeroSocio)
  console.log(`Socios activos después de agregar el socio ${numeroSocio}:`, sociosActivos)
};

agregarSocio(5004)
agregarSocio(5001)