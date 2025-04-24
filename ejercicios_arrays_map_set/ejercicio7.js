const puntajes = [85, 92, 78, 95, 88];

const mapaPuntajes = new Map();

puntajes.forEach((puntaje, index) => {
  mapaPuntajes.set(index, puntaje)
})

mapaPuntajes.set(puntajes.length, 90)

console.log(mapaPuntajes)