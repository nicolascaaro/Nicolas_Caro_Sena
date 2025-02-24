let estadoPc = ""

if (estadoPc == "emite pitido al iniciar y el disco duro gira"){
    console.log ("La pc esta averiada")
} else if (estadoPc == "emite pitido y la unidad gira"){
    console.log ("Pongase en contacto con el tecnico apoyo")
} else if (estadoPc == "emite pitido y la unidad no gira"){
    console.log ("verificar contactos de la unidad")
} else if (estadoPc == "no emite pitido y el disco duro no gira"){
    console.log ("traiga la computadora para repararla en la central")
} else if (estadoPc == "no emite pitido y el disco duro gira"){
    console,log ("compruebe las conexiones de altavoces")
} else if (estadoPc == ""){
    console.log ("la pc esta en perfecto estado")
} else {
    console.log ("ERROR")
}
