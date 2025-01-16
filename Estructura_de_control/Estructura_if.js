//En este apartado vamos a trabajar y desarrollar estructuras de control como es el caso de if-else

//Estas estructuras nos van a servir para controlar y organizar diferentes estructuras y/o comparadores coloquialmente conocidos

const ejemplo = 1000
const puntuacion1 = 1000
const puntuacion2 = 1000.01
const puntuacion3 = 1200
const puntuacion4 = 876

if (puntuacion1 ==  ejemplo){
    console.log("La puntuación es identica")
} else {
    console.log("Puntuaciones diferentes")
}

//En el caso de que queramos comparar un valor y sean diferentes en el typeof, deberemos usar un comparador diferente, el cual es ===


if (puntuacion2 ===  ejemplo){ //En este caso comparamos si el valor es tanto el mismo número, pero tambien si es un int
    console.log("La puntuación es identica, tanto el tipo como el valor")
} else {
    console.log("Puntuaciones diferentes")
}

//Existen otro tipo de comparadores, en este caso nos encontramos con el mayor, menor, mayor o igual, menor o igual que...

if (puntuacion3 >=  ejemplo){ //En este caso comparamos si el valor es tanto el mismo número, pero tambien si es un int
    console.log("La puntuación es mayor que la del ejemplo")
} else {
    console.log("Olvidalo, la puntuación es menor que el ejemplo")
}

//Valores diferentes, con el <=

if (puntuacion4 <=  ejemplo){ //En este caso comparamos si el valor es tanto el mismo número, pero tambien si es un int
    console.log("La puntuación es menor que la del ejemplo")
} else {
    console.log("La puntuación es más grande que el ejemplo")
}

