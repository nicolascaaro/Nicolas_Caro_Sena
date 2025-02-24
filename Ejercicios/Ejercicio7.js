let genero = "M"
let edad = 2

let ayudaMujeres;
if(genero === "F"){  
    if (edad > 50){
        ayudaMujeres = 120000
        console.log ("Usted recibira una ayuda mensual de: " +ayudaMujeres)
    } else if (edad >= 30 && edad <= 50){
        ayudaMujeres = 100000
        console.log ("Usted recibira una ayuda mensual de: " +ayudaMujeres)
    } else {
        console.log ("No cumple con la edad para recibir la ayuda economica")
    }
}

let ayudaHombres;

if (genero === "M"){
    ayudaHombres = 40000
    console.log ("Mensualmente recibe ayuda de: "+ayudaHombres)
}