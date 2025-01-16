/**
 * Ejercicio 4: Ordenar números de forma descendente
Dado el siguiente array:

const numeros = [3, 5, 2, 10, 8];
Tareas:

Usa una Arrow Function con sort para ordenar los números de forma descendente.
Muestra el array ordenado en la consola.
 */

const numeros = [3, 5, 2, 10, 8];

const ordenar = numeros.sort((a,b) => a -b)
console.log(ordenar)