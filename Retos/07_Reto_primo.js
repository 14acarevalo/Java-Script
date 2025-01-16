//En este reto vamos a buscar si un número es o no primo

const number = 3

if (number <1) {
    console.log(`El número no se puede identificar, ya que los menores de 0 no se cuentan como primos`)
} else if (number ===2) {
    console.log(`El número ${number} es primo`)
} else if (number % 2!= 0) {
    console.log(`El número ${number} es primo`)
} else {
    console.log(`Lo siento, el número ${number} no es primo`)
}


//Vamos a realizar el mismo reto, pero en este caso vamos a realizarlo sobre un intervalo
console.log("Vamos a realizar el mismo reto, pero en este caso vamos a realizarlo sobre un intervalo")
const numeroMayor = 40

for (let i = 1; i<= numeroMayor; i++){
    if (i <1) {
        console.log(`El número no se puede identificar, ya que los menores de 0 no se cuentan como primos`)
    } else if (i ===2) {
        console.log(`El número ${i} es primo`)
    } else if (i % 2!= 0) {
        console.log(`El número ${i} es primo`)
    } else {
        console.log(`Lo siento, el número ${i} no es primo`)
    }
}