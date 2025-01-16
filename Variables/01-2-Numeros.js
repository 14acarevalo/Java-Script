//En este apartado, lo fundamental es trabajar el método math, a través del cuál se redondea un número


let numero = 2.5
let number = 4.7
let number1 = 7.3
let number2 = 8.7
let numero_negativo = -500

console.log(`La impresión de los números sin redondear:
            ${numero}
             ${number}
              ${number1}
               ${number2}`)

let numero_redondeado = Math.round(numero)
let number_redondeado_hacia_arriba = Math.ceil(number)
let number_redondeado_hacia_abajo = Math.floor(number1)
let eliminar_decimales = Math.trunc(number2)
let raiz = Math.sqrt(numero)
let absoluto = Math.abs(numero_negativo)
let aleatorio = Math.random()
let maximo = Math.max(3,4,5,6,7,8,9,1)
let minimo = Math.min(4,5,6,7,8,9,1,2,3,4)
console.log (`Operaciones con números:
    Redondeo: ${numero_redondeado}
    Redondeo hacia arriba: ${number_redondeado_hacia_arriba}
    Redondeado hacia abajo: ${number_redondeado_hacia_abajo} 
    Quitar decimales: ${eliminar_decimales}
    Raiz: ${raiz}
    Absoluto: ${absoluto}
    Aleatorio: ${aleatorio}
    Máximo: ${maximo}
    Mínimo: ${minimo}`)


//Incrementos y decrementos

let normal_number = 7
console.log(`El número sin incremento es: ${normal_number}`)
normal_number++
console.log(`El número con incremento es: ${normal_number}`)
normal_number--
normal_number--
console.log(`El número con decremento es: ${normal_number}`)
normal_number--*2 // como ves no hace nada, solo decrementar una vez más
console.log(`El número con decremento es: ${normal_number}`)


//Conversiones a números

let numero1_a_convertir = "2"
let numero2_a_convertir = "3.3"
let numero3_a_convertir = "4.5"
let numero4_a_convertir = "4"

console.log(Number.isInteger(numero3_a_convertir)) //False
console.log(Number.isInteger(numero4_a_convertir)) //True

console.log(typeof numero1_a_convertir) //String
console.log(Number.parseInt(numero1_a_convertir)) //Devolvera un número


console.log(typeof numero2_a_convertir) //String
console.log(Number.parseFloat(numero2_a_convertir)) //Devolvera un número






    
    