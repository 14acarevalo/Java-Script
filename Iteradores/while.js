//El bucle while, es un bucle que se va a ejecutar mientras se cumpla una condición
//Como ocurria en bucle for, partiamos de un determinado valor hasta conseguir alcanzar una determinada condición
//Este bucle una de las ventajas que tiene es que escribimos menos código

let i = 20
console.log("Vamos a ir hacia delante")

while (i<40){
    console.log(i)
    i++
}
console.log("Vamos a ir hacia atrás")

while (i>5){
    console.log(i)
    i--
}

console.log("Vamos a imprimir pares:")

while(i<30){
    if (i % 2 ==0) {
        console.log(i)
    }
    i++
}

console.log("Vamos a imprimir impares:")
while(i<30){
    if (i % 2 != 0) {
        console.log(i)
    }
    i++
}

let number = 5
let num = 1
console.log(`Tabla de multiplicar del número ${number}`)
while(num<=10){
    
    console.log (`Número ${number} x ${num} = ${number*num}`)
    num++
    
}