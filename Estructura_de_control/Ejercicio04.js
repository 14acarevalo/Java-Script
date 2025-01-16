//Validar edad para conducir

const edad = 12
//Estamos en America

if (edad >=  16 && edad < 21 ) {
    console.log ("Puedes conducir pero con un tutor")
} else if (edad >= 21) {
    console.log("Puedes conducir tu sólo")
} else {
    console.log ("No tienes edad suficiente para conducir")
}