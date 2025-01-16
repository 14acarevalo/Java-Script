/**
 * Ejercicio 6: Filtrar una lista con arrow functions
Usa una función de flecha para filtrar los números impares de un arreglo de números.
 */

const array = [1,2,3,4,5,6,7,8,9]
const filtrarNumeros = array.filter((x) => x%2 != 0)
console.log(filtrarNumeros)