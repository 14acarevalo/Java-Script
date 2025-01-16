/** 
 * Crea un programa que sea capaz de solicitarte un número y se
 * encargue de imprimir su tabla de multiplicar entre el 1 y el 10.
 * - Debe visualizarse qué operación se realiza y su resultado.
 *   Ej: 1 x 1 = 1
 *       1 x 2 = 2
 *       1 x 3 = 3
 *       ...
 */

let numero = 5
console.log("Tabla de multiplicar del número: " +numero)

for (let x = 0; x<=10; x++){
    let multiplicacion = numero * x
    console.log("Numero " + numero + " multiplicado por " + x + " = " +multiplicacion)
}