//Reto con operaciones y operadores 

const number = 1
const number2 = 22
const operador = "/"

if ((number + number2) >= 20 && operador === "+") { 
    var operacion = (number + number2) + 50
        console.log (`El resultado es igual a ${operacion}`)
} else if ((number + number2) >= 20 && operador === "/") {
    var operacion = (number + number2) / 2
        console.log (`El resultado es igual a ${operacion}`)
}
else {
    console.log(`oooooooooooooh!!! La suma de los digitos es menor que 24`)
}