//Crea un programa que tome tres números y los clasifique de mayor a menor usando if/else.

const num = 1
const num2 = 2
const num3 = 3

console.log("Vamos a ordenar los números de mayor a menor: ")
if (num > num2 && num2 > num3 && num > num3){
    console.log (`El orden de los números es el correcto y por lo tanto quedan asi:
                Primero: ${num}
                Segundo: ${num2}
                Tercero: ${num3}`)
} else if (num2 > num3 && num > num && num2 > num) {
    console.log (`El orden de los números es el correcto y por lo tanto quedan asi:
        Primero: ${num2}
        Segundo: ${num3}
        Tercero: ${num}`)
} else if (num3 > num2 && num2 > num && num3 > num) {
    console.log (`El orden de los números es el correcto y por lo tanto quedan asi:
        Primero: ${num3}
        Segundo: ${num2}
        Tercero: ${num}`)
} else {
    console.log ("No soy capaz de establecer un orden")
}