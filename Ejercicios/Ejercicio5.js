let estudiante = "Nicolas Caro Caicedo"
let notaFisica = 10
let notaQuimica = 2
let notaBiologia = 6
let notaMatematicas = 2
let notaInformatica = 1

let porcentaje;

if (notaBiologia, notaFisica, notaInformatica, notaMatematicas, notaQuimica <= 10 && notaBiologia, notaFisica, notaInformatica, notaMatematicas, notaQuimica >=0){
    porcentaje = (notaBiologia + notaFisica + notaInformatica + notaMatematicas + notaQuimica / 50)*100
} else {
    console.log ("ERROR")
}

if (porcentaje >= 0 && porcentaje <= 59){
    console.log(`${estudiante} su porcentaje ha sido ${porcentaje} su rendimiento academico fue MALO`);
} else if (porcentaje >= 60 && porcentaje <= 80){
    console.log(`${estudiante} su porcentaje ha sido ${porcentaje} su rendimiento academico fue BUENO`);
} else if (porcentaje > 80){
    console.log(`${estudiante} su porcentaje ha sido ${porcentaje} su rendimiento academico fue EXCELENTE`);
}