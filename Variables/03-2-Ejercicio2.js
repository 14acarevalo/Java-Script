//Operaciones primer paso

function suma(number1, number2){
    let sumatorio = number1 + number2
    console.log(`El resultado de sumar ${number1} y ${number2} es igual a ${sumatorio}`)
}

suma(1,2)
suma(4,10)
suma (20,45)


function resta(number1, number2){
    let resta = number1 - number2
    console.log(`El resultado de restar ${number1} y ${number2} es igual a ${resta}`)
}

resta(5,3)
resta(6,8)
resta(6,2)

function multiplicacion(number1, number2){
    let multiplicacion = number1 * number2
    console.log(`El resultado de multiplicar ${number1} y ${number2} es igual a ${multiplicacion}`)
}

multiplicacion(4,3)
multiplicacion(2,6)
multiplicacion(2,20)

function division(number1, number2){
    let division = number1 / number2
    console.log(`El resultado de dividir ${number1} y ${number2} es igual a ${division}`)
}

division(4,3)
division(2,6)
division(2,20)

// Estos ejercicios estarian incompletos, puesto que seria necesario meter una condición if / else, para evitar que en las restas y divisiones el number 2 sea más grande